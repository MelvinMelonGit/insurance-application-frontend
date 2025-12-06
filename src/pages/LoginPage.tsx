import Card from "@/components/layout-components/Card"
import Button from "@/components/form-components/Button"
import Input from "@/components/form-components/Input"
import Label from "@/components/form-components/Label"
import Wrapper from "@/components/layout-components/Wrapper"
import useFetch from "@/hooks/useFetch"
import { useNavigate } from "react-router"
import Grid from "@/components/layout-components/Grid"
import Title from "@/components/typography-components/Title"

function LoginPage() {
  const navigate = useNavigate()
  const { loading, error, fetchData } = useFetch()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const bodyData = Object.fromEntries(formData.entries()) as Record<string, string>

    const result = await fetchData(`http://localhost:3000/login/${bodyData.username.slice(-1)}`, bodyData)

    if (result) {
      navigate(`/dashboard/${result.id}`)
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>Welcome back to FastClaims</Title>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Label labelText="Username">
                <Input type="text" name="username" placeholder="Username" />
              </Label>
              <Label labelText="Password">
                <Input type="password" name="password" placeholder="Password" />
              </Label>
            </Grid>
            <Button disabled={loading}>Login</Button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
      </Card>
    </Wrapper>
  )
}

export default LoginPage