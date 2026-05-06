import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  type?: 'hero' | 'about' | 'services' | 'products' | 'map'
}

export interface SectionProps extends Section {
  isActive: boolean
}

export interface ServiceItem {
  title: string
  description: string
  price: string
  image: string
}

export interface ProductItem {
  title: string
  description: string
  price: string
  image: string
}
