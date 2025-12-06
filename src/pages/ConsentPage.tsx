import Button from "@/components/form-components/Button"
import Input from "@/components/form-components/Input"
import Label from "@/components/form-components/Label"
import Card from "@/components/layout-components/Card"
import Grid from "@/components/layout-components/Grid"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"
import useFetch from "@/hooks/useFetch"
import type { ApplicationFormFlat } from "@/stores/userApplicationStore"
import { userApplicationStore } from "@/stores/userApplicationStore"
import { useAtom } from "jotai"
import { useNavigate, useParams } from "react-router"

function ConsentPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { loading, error, fetchData } = useFetch()
  const [userApplication,] = useAtom(userApplicationStore)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const bodyData = Object.fromEntries(formData.entries()) as Partial<ApplicationFormFlat>
    
    if (bodyData) {
      // Merge with current atom
      const updatedApplication = { ...userApplication, ...bodyData }

      // Convert all values to strings
      const bodyDataString: Record<string, string> = Object.fromEntries(
        Object.entries(updatedApplication).map(([key, value]) => [key, String(value ?? "")])
      )

      const result = await fetchData("http://localhost:3000/userApplication", bodyDataString, "POST")
      if (result) {
        navigate(`/thank-you/${id}`)
      }
    }
  }

  return (
    <Wrapper>
      <Card width="xl">
        <Title>Terms and Conditions</Title>
        <form onSubmit={handleSubmit}>  
            <Grid>
            <Label labelText="I certify this information is true.">
                <Input type="text" name="certified" placeholder="Certified" />
            </Label>
            <Label labelText="I authorize release of medical information for application.">
                <Input type="text" name="authorized" placeholder="Authorized" />
            </Label>
            </Grid>
            <Button disabled={loading}>Submit</Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </Card>
    </Wrapper>
  )
}

export default ConsentPage