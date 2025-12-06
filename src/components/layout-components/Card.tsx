import type { ReactNode } from "react"

interface CardProps {
  width?: string
  children: ReactNode
}

const widthMap: Record<string, string>  = {
  sm: "min-w-sm",
  md: "min-w-md",
  lg: "min-w-lg",
  xl: "min-w-xl",
}

function Card({ width, children }: CardProps) {
  return (
    <div className={`card bg-base-100 shadow-sm self-center ${width ? `${widthMap[width]}`: "min-w-md"}`}>
      <div className="card-body gap-6">
        {children}
      </div>
    </div>
  )
}

export default Card