import { useContext, useEffect } from "react"
import { AuthConstext } from "../context/AuthContext"
import { api } from "../services/api"

export default function Deshboard() {
  const { user } = useContext(AuthConstext)

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
  }, [])

  return <h1>Dashboard: {user?.email}</h1>
}