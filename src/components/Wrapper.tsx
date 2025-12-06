import type { ReactNode } from "react"

interface WrapperProps {
    children: ReactNode
}

function Wrapper({children}: WrapperProps) {
  return (
    <main data-theme="corporate" className="bg-gray-100 min-h-screen grid place-content-center">
        {children}
    </main>
  )
}

export default Wrapper