import { createContext } from "react";

export const myContext = createContext(null);

function TotalContext(){
  const num = 100
  return (
    <myContext.Provider value={{num}}>
      
    </myContext.Provider>
  )
} 

export default TotalContext;
