export interface Service {
  name: string
  image: string
  therapeuticNote: string
}

export interface Category {
  category: string
  subtitle?: string
  items: Service[]
}

