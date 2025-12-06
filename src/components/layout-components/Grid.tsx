import type { ReactNode } from "react"

interface GridProps {
  cols?: string
  children: ReactNode
}

const colMap: Record<number, string>  = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
}

function Grid({ cols, children }: GridProps) {
  return (
    // able to customise grid size
    <div className={`grid ${cols ? `${colMap[Number(cols)]}` : "grid-cols-1"} gap-4`}>
      {children}
    </div>
  )
}

export default Grid