import LinkButton from "@/components/form-components/LinkButton"
import Card from "@/components/layout-components/Card"
import Grid from "@/components/layout-components/Grid"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"
import useFetch from "@/hooks/useFetch"
import { userProfileStore } from "@/stores/userProfileStore"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router"

function DashboardPage() {
  const { id } = useParams()
  const { fetchData } = useFetch()

  const [userProfile, setUserProfle] = useAtom(userProfileStore)

  useEffect(() => {
    (async () => {
      const result = await fetchData(`http://localhost:3000/userProfile/${id}`)
      setUserProfle(result)
    })()
  }, [id])

  return (
    <Wrapper>
      <Card>
        <Title>Welcome { userProfile.name }!</Title>
        <Grid cols="2">
          <LinkButton to={`/create-application/${id}`}>Create Application</LinkButton>
          <LinkButton to="/">View Applications</LinkButton>
        </Grid>
      </Card>
    </Wrapper>
  )
}

export default DashboardPage