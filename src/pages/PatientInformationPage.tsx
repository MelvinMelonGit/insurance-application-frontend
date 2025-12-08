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

function PatientInformationPage() {
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
      navigate(`/hospital-info/${id}`)
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>Fill In Patient Information</Title>
        <form onSubmit={handleSubmit}>  
            <Grid cols="2">
            <Label labelText="Full name">
                <Input type="text" name="fullname" placeholder="Full name" />
            </Label>
            <Label labelText="Date of birth">
                <Input type="text" name="dateOfBirth" placeholder="Date of birth" />
            </Label>
            <Label labelText="Insurance member ID">
                <Input type="text" name="memberId" placeholder="Insurance Member ID" />
            </Label>
            <Label labelText="Policy number">
                <Input type="text" name="policyNumber" placeholder="Policy number" />
            </Label>
            <Label labelText="Contact number">
                <Input type="text" name="contactNumber" placeholder="Contact number" />
            </Label>
            <Label labelText="Email address">
                <Input type="email" name="email" placeholder="Email address" />
            </Label>
            <Label labelText="Address">
                <Input type="text" name="address" placeholder="Address" />
            </Label>
            </Grid>
            <Button>Next</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default PatientInformationPage