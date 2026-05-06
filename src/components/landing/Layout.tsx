import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#1a1a2e"
          hoverFillColor="#0d1b2a"
        />
      </div>
      <div className="fixed top-0 left-0 z-30 p-6">
        <span className="text-white font-bold text-lg tracking-wide">
          <span className="text-[#00C9FF]">Интернет</span> Цапля
        </span>
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}