import { NextRequest, NextResponse } from 'next/server'

// In-memory rate limiting. For production at scale, replace with Upstash Redis.
const rateMap = new Map<string, { count: number; reset: number }>()

const LIMITS: Record<string, { max: number; windowMs: number }> = {
  '/api/checkout': { max: 10, windowMs: 60_000 },
  '/api/contact':  { max: 5,  windowMs: 60_000 },
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  const limit = LIMITS[pathname]

  if (limit && req.method === 'POST') {
    const ip = getIp(req)
    const key = `${ip}:${pathname}`
    const now = Date.now()
    const entry = rateMap.get(key)

    if (!entry || now > entry.reset) {
      rateMap.set(key, { count: 1, reset: now + limit.windowMs })
    } else if (entry.count >= limit.max) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again shortly.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((entry.reset - now) / 1000)),
          },
        }
      )
    } else {
      entry.count++
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/checkout', '/api/contact'],
}
