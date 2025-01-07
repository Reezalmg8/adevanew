export interface Service {
  name: string
  image: string
  description: string
  therapeuticNote: string
  pricing: { duration: string; member: string; nonMember: string }[]
}

export interface Category {
  category: string
  subtitle?: string
  items: Service[]
}

