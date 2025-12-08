import type { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}

function Wrapper({children}: WrapperProps) {
  return (
    <main className="bg-linear-to-br from-[#f7f9ff] to-[#e6ecf8] p-10 min-h-screen grid place-content-center">
      {children}
    </main>
  )
}

export default Wrapper