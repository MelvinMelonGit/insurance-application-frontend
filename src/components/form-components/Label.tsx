import type { ReactNode } from "react"

interface LabelProps {
  labelText: string
  htmlFor: string
  checkbox?: boolean
  children: ReactNode
}

function Label({ labelText, htmlFor, checkbox, children }: LabelProps) {
  return (
    <label className={`gap-1 ${checkbox ? 'flex flex-row-reverse justify-end' : 'grid'}`} htmlFor={htmlFor}>
      <span className="font-medium">{labelText}</span>
      { children }
    </label>
  )
}

export default Label