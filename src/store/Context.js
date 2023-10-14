import { createContext, useContext, useState } from "react";

export const FirebaseContext = createContext(null)

export function useFirebase(){
  return useContext(FirebaseContext);
}

export const AuthContext = createContext(null)

export default function Context({children}){
  const [user,setUser] = useState(null)
  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  )
}