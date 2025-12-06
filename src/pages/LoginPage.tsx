import Card from "@/components/Card"
import Button from "@/components/form-components/Button"
import Input from "@/components/form-components/Input"
import Label from "@/components/form-components/Label"
import Wrapper from "@/components/Wrapper"
import useFetch from "@/hooks/useFetch"
import { useNavigate } from "react-router"

function LoginPage() {
  const navigate = useNavigate()
  const { loading, error, fetchData } = useFetch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget) // HTML FormData
    const bodyData = Object.fromEntries(formData.entries()) as Record<string, string> // convert to object

    const result = await fetchData(`http://localhost:3000/login/${bodyData.username.slice(-1)}`, bodyData)

    if (result) {
      navigate(`/dashboard/${result.id}`)
    }
  }

  return (
    <Wrapper>
      <Card>
        <h1 className="text-3xl font-thin text-center">Welcome back to FastClaims</h1>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <Label labelText="Username">
            <Input type="text" name="username" placeholder="Username" />
          </Label>
          <Label labelText="Password">
            <Input type="password" name="password" placeholder="Password" />
          </Label>
          <Button disabled={loading}>Login</Button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Card>
    </Wrapper>
  )
}

export default LoginPage