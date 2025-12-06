import Card from "@/components/layout-components/Card"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"
import { Link, useParams } from "react-router"

function ThankYouPage() {
  const { id } = useParams()

  return (
    <Wrapper>
      <Card>
        <Title>Thanks for your submission { id }!</Title>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </Card>
    </Wrapper>
  )
}

export default ThankYouPage