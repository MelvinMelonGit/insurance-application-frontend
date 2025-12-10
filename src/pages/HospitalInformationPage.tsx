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
            <Label labelText="Hospital name" htmlFor="hospitalName">
                <Input type="text" name="hospitalName" id="hospitalName" placeholder="Hospital name" />
            </Label>
            <Label labelText="Doctor name" htmlFor="doctorName">
                <Input type="text" name="doctorName" id="doctorName" placeholder="Doctor name" />
            </Label>
            <Label labelText="Doctor license" htmlFor="doctorLicense">
                <Input type="text" name="doctorLicense" id="doctorLicense" placeholder="Doctor License" />
            </Label>
            <Label labelText="Hospital address" htmlFor="hospitalAddress">
                <Input type="text" name="hospitalAddress" id="hospitalAddress" placeholder="Hospital address" />
            </Label>
            <Label labelText="Hospital contact number" htmlFor="hospitalContactNumber">
                <Input type="tel" name="hospitalContactNumber" id="hospitalContactNumber" placeholder="Hospital contact number" />
            </Label>
            <Label labelText="Department" htmlFor="department">
                <Input type="text" name="department" id="department" placeholder="Department" />
            </Label>
            </Grid>
            <Button>Next</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default HospitalInformationPage