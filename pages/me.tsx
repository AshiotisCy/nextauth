import { useSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"
import Layout from "../components/layout"


export const tokenHandler = async (req:any, res:any) => {
  const secret = "M8iv5kpAwJMcl1dcPcylsSFEYlqOqTdH"

  const token =  getToken({req, secret})
  console.log("token:", token)
  res.end
} 

export default function MePage() {
  const { data } = useSession()
  // tokenHandler()
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data && (
      <div>
        <span>Name: </span>
        <span>{data?.user?.name}</span>
      </div>
      )}
    </Layout>
  )
}
// https://locibuddy.com/realms/AngelDemo/.well-known/openid-configuration
// https://locibuddy.com/admin/master