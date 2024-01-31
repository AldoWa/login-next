import { Button } from "@/components/form/Button"
import { AuthContext } from "@/context/AuthContext"
import { withSSRAuth } from "@/lib/withSSRAuth"
import Image from "next/image"
import { useContext } from "react"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext)
  if(!user) return <h1>loading...</h1>
  return (
    <div className="min-h-screen bg-slate-500">
      <div className="bg-slate-500 p-6 h-60 w-full text-white flex flex-col gap-3">
        <h1>Dashboard</h1>
        <Image alt="Avatar user" src={user.avatar} width={40} height={40} className="rounded-full"/>
        <p>Nome: { user.name }</p>
        <p>Email: { user.name }</p>
        <Button onClick={() => signOut()}>
          Signout
        </Button>
      </div>
    </div>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})