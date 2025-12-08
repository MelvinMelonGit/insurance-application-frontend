import Button from "@/components/form-components/Button"
import Input from "@/components/form-components/Input"
import Label from "@/components/form-components/Label"
import Card from "@/components/layout-components/Card"
import Grid from "@/components/layout-components/Grid"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"
import type { ApplicationFormFlat } from "@/stores/userApplicationStore"
import { userApplicationStore } from "@/stores/userApplicationStore"
import { useAtom } from "jotai"
import { useNavigate, useParams } from "react-router"

function HospitalInformationPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [, setUserApplication] = useAtom(userApplicationStore)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const bodyData = Object.fromEntries(formData.entries()) as Partial<ApplicationFormFlat>

    if (bodyData) {
      setUserApplication(prev => ({
        ...prev,
        ...bodyData,
      }))
      navigate(`/application-reason/${id}`)
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>Fill In Hospital Information</Title>
        <form onSubmit={handleSubmit}>  
            <Grid cols="2">
            <Label labelText="Hospital name">
                <Input type="text" name="hospitalName" placeholder="Hospital name" />
            </Label>
            <Label labelText="Doctor name">
                <Input type="text" name="doctorName" placeholder="Doctor name" />
            </Label>
            <Label labelText="Doctor license">
                <Input type="text" name="doctorLicense" placeholder="Doctor License" />
            </Label>
            <Label labelText="Hospital name">
                <Input type="text" name="hospitalAddress" placeholder="Hospital address" />
            </Label>
            <Label labelText="Hospital contact number">
                <Input type="text" name="hospitalContactNumber" placeholder="Hospital contact number" />
            </Label>
            <Label labelText="Department">
                <Input type="text" name="department" placeholder="Department" />
            </Label>
            </Grid>
            <Button>Next</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default HospitalInformationPage