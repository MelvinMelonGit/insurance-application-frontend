import type { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
}

function Title({children}: TitleProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight">
      {children}
    </h1>
  )
}

export default Title