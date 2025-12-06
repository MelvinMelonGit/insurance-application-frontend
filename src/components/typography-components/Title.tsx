import type { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
}

function Title({children}: TitleProps) {
  return (
    <h1 className="text-3xl font-thin text-center">
      {children}
    </h1>
  )
}

export default Title