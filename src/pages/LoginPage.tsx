import Card from "@/components/Card"
import Input from "@/components/form-components/Input"
import Label from "@/components/form-components/Label"
import Wrapper from "@/components/Wrapper"
import { atom, useAtom } from "jotai"
import { useNavigate } from "react-router"

const errorAtom = atom("")
const loadingAtom = atom(false)

function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useAtom(errorAtom)
  const [loading, setLoading] = useAtom(loadingAtom)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const formData = new FormData(e.currentTarget) // HTML FormData
    const data = Object.fromEntries(formData.entries()) // convert to object

    try {
      // const res = await fetch("/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // })

      // if (!res.ok) throw new Error("Invalid username or password")

      // const result = await res.json()
      // console.log(result)

      // for frontend testing purposes only
      const res = await fetch("http://localhost:3000/login")
      const result = await res.json()

      if (!res.ok) {
        throw new Error("Something went wrong")
      } else if(data.username !== result.username || data.password !== result.password) {
        throw new Error("Invalid username or password")
      }

      navigate("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  };

  return (
    <Wrapper>
      <Card width="min-w-md">
        <h1 className="text-3xl font-thin self-center">Welcome back to FastClaims</h1>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <Label labelText="Username">
            <Input type="text" name="username" placeholder="Username" />
          </Label>
          <Label labelText="Password">
            <Input type="password" name="password" placeholder="Password" />
          </Label>
          <button className="btn btn-primary w-full" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Card>
    </Wrapper>
  )
}

export default LoginPage