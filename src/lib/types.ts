export type ProductCategory =
  | 'rings'
  | 'necklaces'
  | 'earrings'
  | 'bracelets'
  | 'nose-rings'
  | 'fine-jewelry'
  | 'everyday-wear'
  | 'custom-orders'

export interface Product {
  id: string
  title: string
  slug: string
  price: number
  description: string
  details: string[]
  categories: ProductCategory[]
  image: string
  images: string[]
  badge?: string
  inStock: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: number
  count: number
}

export interface CheckoutFormValues {
  email: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  phone?: string
}
