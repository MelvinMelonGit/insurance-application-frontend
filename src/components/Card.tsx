import type { ReactNode } from "react"

interface CardProps {
  width: string,
  children: ReactNode
}

function Card({ width, children }: CardProps) {
  return (
    <div className={`card ${width} bg-base-100 shadow-sm self-center`}>
        <div className="card-body gap-6">
            {children}
        </div>
    </div>
  )
}

export default Card