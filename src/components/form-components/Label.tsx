import type { ReactNode } from "react"

interface LabelProps {
  labelText: string
  children: ReactNode
}

function Label({ labelText, children }: LabelProps) {
  return (
    <label className="grid gap-2">
        <span className="font-semibold">{labelText}</span>
        { children }
    </label>
  )
}

export default Label