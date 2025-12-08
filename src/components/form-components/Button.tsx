import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    disabled?: boolean
}

function Button({ disabled, children }: ButtonProps) {
  return (
    <button className="btn btn-primary w-60 mt-8 rounded-4xl" type="submit" disabled={disabled}>
      {disabled ? "Loading..." : children }
    </button>
  )
}

export default Button