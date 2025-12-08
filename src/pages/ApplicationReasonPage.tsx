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

function ApplicationReasonPage() {
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
      navigate(`/consent/${id}`)
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>Fill In Application Reason</Title>
        <form onSubmit={handleSubmit}>  
            <Grid cols="2">
            <Label labelText="Category">
                <Input type="text" name="category" placeholder="Category" />
            </Label>
            <Label labelText="Date of service">
                <Input type="text" name="dateOfService" placeholder="Date of service" />
            </Label>
            <Label labelText="Diagnosis">
                <Input type="text" name="diagnosis" placeholder="Diagnosis" />
            </Label>
            <Label labelText="Total billed">
                <Input type="text" name="totalBilled" placeholder="Total billed" />
            </Label>
            <Label labelText="Reason">
                <Input type="text" name="reason" placeholder="Reason" />
            </Label>
            </Grid>
            <Button>Next</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default ApplicationReasonPage