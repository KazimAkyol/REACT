import React, { createContext } from 'react'

//! context alani create edelim:
export const YetkiContext=createContext()

const AuthContext = ({children}) => {
  return (
    <YetkiContext.Provider>
        {children}
    </YetkiContext.Provider>
  )
}

export default AuthContext