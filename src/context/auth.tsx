import { User } from '@/entities/user.entity'
import { useStorage } from '@/hooks/useStorage'
import axiosUtil from '@/utils/axios.util'
import { Http } from '@/utils/http.util'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

export type SignUpData = {
  name: string
  email: string
  age: number
  occupation: string
  contact: string
  password: string
  role: 'user' | 'professional'
}

export type SignInData = {
  email: string
  password: string
}

export interface AuthContextInterface {
  signIn: (data: SignInData) => Promise<{ success: boolean, message?: string, accessToken?: string, refreshToken?: string }>
  signOut: () => void
  signUp: (data: SignUpData) => Promise<boolean>
  session?: string | null
  refreshToken?: string | null
  isLoading: boolean
  getSession: (accessToken?: string) => Promise<User | null>
  user?: string | null
  isLoadingUser: boolean
}

const AuthContext = createContext<AuthContextInterface>({
  signIn: async () => ({ success: false, message: 'Erro ao entrar', accessToken: '', refreshToken: '' }),
  signUp: async () => false,
  signOut: () => {},
  session: null,
  refreshToken: null,
  isLoading: false,
  getSession: async (accessToken?: string) => null,
  user: null,
  isLoadingUser: false,
})

export function useSession() {
  const value = useContext(AuthContext)

  if (!value && process.env.NODE_ENV !== 'production') {
    throw new Error('useSession must be wrapped in a <SessionProvider />')
  }

  return useMemo(
    () => ({
      ...value,
      isAuthenticated: value.session !== null,
    }),
    [value],
  )
}

export default function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorage('session')
  const [[isLoadingRefreshToken, refreshToken], setRefreshToken] = useStorage('refreshToken')
  const [[isLoadingUser, user], setUser] = useStorage('user')

  const signUp = async (data: SignUpData): Promise<boolean> => {
    const response = await axiosUtil.post({ url: '/auth/signup', data, process: false })

    if (Http.failed(response.status)) {
      setSession(null)
      setRefreshToken(null)
      console.log(response.data)
      return false
    }

    setSession(response.data.accessToken)
    setRefreshToken(response.data.refreshToken)
    return true
  }

  const signIn = async (data: SignInData): Promise<{ success: boolean, message?: string, accessToken?: string, refreshToken?: string }> => {
    const response = await axiosUtil.post({ url: '/auth/signin', data })

    if (Http.failed(response.status)) {
      setSession(null)
      setRefreshToken(null)
      console.log(response.data)
      return { success: false, message: response.data.message ?? 'Erro ao entrar' }
    }

    setSession(response.data.accessToken)
    setRefreshToken(response.data.refreshToken)

    const _response = await axiosUtil.get({ url: '/auth/me', process: false, token: response.data.accessToken })

    if (Http.failed(_response.status)) {
      setSession(null)
      setRefreshToken(null)
      return { success: false, message: _response.data.message ?? 'Erro ao entrar' }
    }

    setUser(JSON.stringify(_response.data))

    return { success: true, accessToken: response.data.accessToken, refreshToken: response.data.refreshToken }
  }

  const signOut = () => {
    setSession(null)
    setUser(null)
    setRefreshToken(null)
  }

  const getSession = async (accessToken?: string): Promise<User | null> => {
    if ((session || accessToken) && !isLoading) {
      const response = await axiosUtil.get({ url: '/auth/me', process: false, token: session || accessToken })
      
      if (Http.failed(response.status)) {
        setSession(null)
        setRefreshToken(null)
        return null
      }

      //setUser(JSON.stringify(response.data))

      return response.data
    }

    return null
  }

  const contextValue = useMemo(
    () => ({
      signIn,
      signOut,
      signUp,
      session,
      refreshToken,
      isLoading: isLoading || isLoadingRefreshToken,
      getSession,
      user,
      isLoadingUser,
    }),
    [signIn, signOut, signUp, session, refreshToken, isLoading, isLoadingRefreshToken, getSession, user, isLoadingUser],
  )

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
