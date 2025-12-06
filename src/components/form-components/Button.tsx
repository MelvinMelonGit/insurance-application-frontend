import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    disabled?: boolean
}

function Button({ disabled, children }: ButtonProps) {
  return (
    <button className="btn btn-primary w-full" type="submit" disabled={disabled}>
        {disabled ? "Loading..." : children }
    </button>
  )
}

export default Button