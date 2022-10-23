import type { NextPage } from 'next'
import { FormEvent, useContext, useState } from 'react'
import { AuthConstext } from '../context/AuthContext'
import { FormCotainer } from '../styles/pages/home'

const Home: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthConstext)

  async function handleSubmit(envet: FormEvent) {
    envet.preventDefault()

    const data = {
      email,
      password,
    }

    await signIn(data)
  }

  return (
    <FormCotainer onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit" >Entrar</button>
    </FormCotainer>
  )
}

export default Home
