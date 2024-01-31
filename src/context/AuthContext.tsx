import { api } from "@/lib/service";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
}

type User = {
  name: string;
	email: string;
	avatar: string;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => void;
  user: User | null;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    if(token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      api.get('me').then(response => {
        const { data } = response
        console.log(data, `DATA`)
        setUser(data)
      })
    }
  }, [])
  
  async function signIn({ email, password }: SignInCredentials) {
    try{
      const { data } = await api.post('auth/login', {
        email,
        password
      })

      setCookie(undefined, 'nextauth.token', data.access_token, {
        maxAge: 60 * 60 * 24 * 10, // 10 days
        path: '/'
      })

      api.defaults.headers['Authorization'] = `Bearer ${data.access_token}`

      const { data: dataUser } = await api.get('/me')

      setUser(dataUser)

      Router.push('/dashboard');
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}