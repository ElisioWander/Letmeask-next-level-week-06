import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase'

type User = {
    name: string,
    avatar: string,
    id: string
}

type AuthContextType = {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({children}: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
      const unsubscriber =  auth.onAuthStateChanged(user => {
        if (user) {
          const { displayName, photoURL, uid } = user
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from Google account.')
          }
  
          setUser({
            name: displayName,
            avatar: photoURL,
            id: uid
          })
        }
      })
  
      return () => {
        unsubscriber()
      }
    }, [])
  
    async function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
  
      const result = await auth.signInWithPopup(provider)
  
      if(result.user) {
        const { displayName, photoURL, uid } = result.user
  
        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google account.')
        }
  
        setUser({
          name: displayName,
          avatar: photoURL,
          id: uid
        })
      }
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
          {children}
        </AuthContext.Provider>
    )
}