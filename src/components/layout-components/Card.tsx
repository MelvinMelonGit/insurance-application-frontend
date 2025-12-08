import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

function Card({ children }: CardProps) {
  return (
    <div className="relative bg-[linear-gradient(135deg,#f5f8ff_0%,#dce4f8_100%)] overflow-hidden p-20 rounded-2xl shadow-lg">

    {/* blurred circles - softer + more cohesive */}
    <div className="absolute top-[-12%] left-[-8%] w-[280px] h-[280px] rounded-full bg-[#e9eef6] opacity-50 blur-[140px]" />
    <div className="absolute bottom-[-8%] right-[-2%] w-[330px] h-[330px] rounded-full bg-[#d7deec] opacity-45 blur-[160px]" />
    <div className="absolute top-[42%] right-[18%] w-[220px] h-[220px] rounded-full bg-[#eef2f9] opacity-55 blur-[110px]" />

      <div className="relative z-10 flex items-center justify-center">
        <div className="card-body gap-6">
          {children}
        </div>
      </div>
    </div>

  )
}

export default Card