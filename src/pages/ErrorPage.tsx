import LinkButton from "@/components/form-components/LinkButton"
import Card from "@/components/layout-components/Card"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"

function ErrorPage() {
  return (
    <Wrapper>
      <Card>
        <Title>You have reached an Error page!</Title>
        <LinkButton to="/">Go Home</LinkButton>
      </Card>
    </Wrapper>
  )
}

export default ErrorPage