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
        <Title>Fill In Policy Information</Title>
        <form onSubmit={handleSubmit}>  
            <Grid cols="2">
            <Label labelText="Full name" htmlFor="fullname">
                <Input type="text" name="fullname" id="fullname" placeholder="Full name" />
            </Label>
            <Label labelText="Date of birth" htmlFor="dateOfBirth">
                <Input type="date" name="dateOfBirth" id="dateOfBirth" value="2018-07-22" />
            </Label>
            <Label labelText="Insurance member ID" htmlFor="memberId">
                <Input type="text" name="memberId" id="memberId" placeholder="Insurance member ID" />
            </Label>
            <Label labelText="Policy number" htmlFor="policyNumber">
                <Input type="text" name="policyNumber" id="policyNumber" placeholder="Policy number" />
            </Label>
            <Label labelText="Contact number" htmlFor="contactNumber">
                <Input type="tel" name="contactNumber" id="contactNumber" placeholder="Contact number" />
            </Label>
            <Label labelText="Email" htmlFor="email">
                <Input type="email" name="email" id="email" placeholder="Email" />
            </Label>
            <Label labelText="Address" htmlFor="address">
                <Input type="text" name="address" id="address" placeholder="Address" />
            </Label>
            </Grid>
            <Button>Next</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default PatientInformationPage