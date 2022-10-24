import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import Router from 'next/router'

import { setCookie, parseCookies } from 'nookies'

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

  useEffect(() => {
    const { 'nextauth.token': token} = parseCookies()
    console.log('token ctx', token)


    if (token) {
      api.get('/me').then(response => {
        const {email, permissions, roles } = response.data

        setUser({ email, permissions, roles })
      })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setUser({
        email,
        permissions,
        roles,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

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
