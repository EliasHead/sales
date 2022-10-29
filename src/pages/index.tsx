import type { NextPage } from 'next'
import { FormEvent, useContext, useState } from 'react'
import { AuthConstext } from '../context/AuthContext'
import { Button, Container, FormCotainer, Input, Label, Title, Wrapper } from '../styles/pages/home'

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
    <Container>
      <Wrapper>
        <Title><span>Login Form</span></Title>
        <FormCotainer onSubmit={handleSubmit}>
          <Label htmlFor="email" css={{ lineHeight: '35px' }}>
            Email
          </Label>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Label htmlFor="email" css={{ lineHeight: '35px' }}>
            Senha
          </Label>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button type="submit" >Entrar</Button>
        </FormCotainer>
      </Wrapper>
    </Container>
  )
}

export default Home
