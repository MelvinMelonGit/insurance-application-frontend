interface InputProps {
    type: string
    id: string
    name: string
    checkbox?: boolean
    value?: string
    placeholder?: string
}

function Input({ type, id, name, checkbox, value, placeholder }: InputProps) {
  return (
    <input type={type} id={id} name={name} value={value} placeholder={placeholder} className={`${checkbox ? 'checkbox' : 'input w-100 border-0 rounded-lg'} `} />
  )
}

export default Input