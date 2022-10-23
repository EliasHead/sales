import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";
import Router from 'next/router'

type User = {
  email: string
  permissions: string[]
  roles: string[]
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthConstextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  user: User | undefined
  isAuthenticate: boolean
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthConstext = createContext({} as AuthConstextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser ] = useState<User>()
  const isAuthenticate = !!user

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setUser({
        email,
        permissions,
        roles,
      })

      Router.push('/dashboard')

    } catch (err) {
      console.log(err)
    }
  } 

  return (
    <AuthConstext.Provider value={{signIn, isAuthenticate, user }}>
      {children}
    </AuthConstext.Provider>
  )
}
