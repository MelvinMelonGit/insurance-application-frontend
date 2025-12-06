import Card from "@/components/layout-components/Card"
import Grid from "@/components/layout-components/Grid"
import Wrapper from "@/components/layout-components/Wrapper"
import Title from "@/components/typography-components/Title"
import useFetch from "@/hooks/useFetch"
import { userProfileStore } from "@/stores/userProfileStore"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { Link, useParams } from "react-router"

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
          <Link to={`/create-application/${id}`} className="btn btn-primary">Create Application</Link>
          <Link to="/" className="btn btn-tertiary">View Applications</Link>
        </Grid>
      </Card>
    </Wrapper>
  )
}

export default DashboardPage