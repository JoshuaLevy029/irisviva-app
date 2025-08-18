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
  signIn: (data: SignInData) => Promise<{ success: boolean, message?: string }>
  signOut: () => void
  signUp: (data: SignUpData) => Promise<boolean>
  session?: string | null
  refreshToken?: string | null
  isLoading: boolean
  getSession: () => Promise<User | null>
}

const AuthContext = createContext<AuthContextInterface>({
  signIn: async () => ({ success: false, message: 'Erro ao entrar' }),
  signUp: async () => false,
  signOut: () => {},
  session: null,
  refreshToken: null,
  isLoading: false,
  getSession: async () => null,
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

  const signIn = async (data: SignInData): Promise<{ success: boolean, message?: string }> => {
    const response = await axiosUtil.post({ url: '/auth/signin', data })

    if (Http.failed(response.status)) {
      setSession(null)
      setRefreshToken(null)
      console.log(response.data)
      return { success: false, message: response.data.message ?? 'Erro ao entrar' }
    }

    setSession(response.data.accessToken)
    setRefreshToken(response.data.refreshToken)

    return { success: true }
  }

  const signOut = () => {
    setSession(null)
    setRefreshToken(null)
  }

  const getSession = async (): Promise<User | null> => {
    if (session && !isLoading) {
      const response = await axiosUtil.get({ url: '/auth/me', process: false, token: session })

      if (Http.failed(response.status)) {
        setSession(null)
        setRefreshToken(null)
        return null
      }

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
    }),
    [signIn, signOut, signUp, session, refreshToken, isLoading, isLoadingRefreshToken, getSession],
  )

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
