import type { ReactNode } from "react"

interface CardProps {
  width?: string
  cols?: string
  children: ReactNode
}

function Card({ width, cols, children }: CardProps) {
  return (
    <div className={`card bg-base-100 shadow-sm self-center ${width ? width : "min-w-md"}`}>
        <div className={`card-body gap-6 grid ${cols ? cols : "grid-cols-1"} gap-x-2`}>
            {children}
        </div>
    </div>
  )
}

export default Card