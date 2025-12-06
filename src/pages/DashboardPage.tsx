import Card from "@/components/Card"
import Wrapper from "@/components/Wrapper"
import useFetch from "@/hooks/useFetch"
import { userProfileStore } from "@/stores/userProfileStore"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { Link, NavLink, useParams } from "react-router"

function DashboardPage() {
  const { id } = useParams()
  const { loading, error, fetchData } = useFetch()

  const [userProfile, setUserProfle] = useAtom(userProfileStore)

  useEffect(() => {
    (async () => {
      const result = await fetchData(`http://localhost:3000/profile/${id}`)
      setUserProfle(result)
    })()
  }, [id])

  return (
    <Wrapper>
      <Card>
        <h1 className="text-3xl font-thin text-center">Welcome { userProfile.name }!</h1>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/" className="btn btn-primary">Create Application</Link>
          <Link to="/" className="btn btn-tertiary">View Applications</Link>
        </div>
      </Card>
    </Wrapper>
  )
}

export default DashboardPage