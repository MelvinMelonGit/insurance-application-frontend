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
            <Label labelText="Category" htmlFor="category">
                <Input type="text" name="category" id="category" placeholder="Category" />
            </Label>
            <Label labelText="Date of service" htmlFor="dateOfService">
                <Input type="date" name="dateOfService" id="dateOfService" value="2018-07-22"/>
            </Label>
            <Label labelText="Diagnosis" htmlFor="diagnosis">
                <Input type="text" name="diagnosis" id="diagnosis" placeholder="Diagnosis" />
            </Label>
            <Label labelText="Total billed" htmlFor="totalBilled">
                <Input type="number" name="totalBilled" id="totalBilled" placeholder="Total billed" />
            </Label>
            <Label labelText="Reason" htmlFor="reason">
                <Input type="text" name="reason" id="reason" placeholder="Reason" />
            </Label>
            </Grid>
            <Button>Next</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default ApplicationReasonPage