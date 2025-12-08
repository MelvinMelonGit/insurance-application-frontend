import type { ReactNode } from "react"
import { Link } from "react-router"

interface ButtonProps {
    to: string
    children: ReactNode
}

function LinkButton({ to, children }: ButtonProps) {
  return (
    <Link className="btn btn-primary w-60 rounded-4xl m-auto" to={to}>
        {children}
    </Link>
  )
}

export default LinkButton