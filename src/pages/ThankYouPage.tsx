import LinkButton from "@/components/form-components/LinkButton"
import Card from "@/components/layout-components/Card"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"
import { useParams } from "react-router"

function ThankYouPage() {
  const { id } = useParams()

  return (
    <Wrapper>
      <Card>
        <Title>Thanks for your submission { id }!</Title>
        <LinkButton to="/">Go Home</LinkButton>
      </Card>
    </Wrapper>
  )
}

export default ThankYouPage