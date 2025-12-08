interface InputProps {
    type: string
    name: string
    placeholder?: string
}

function Input({ type, name, placeholder }: InputProps) {
  return (
    <input type={type} name={name} placeholder={placeholder} className="input w-100 border-0 rounded-lg" />
  )
}

export default Input