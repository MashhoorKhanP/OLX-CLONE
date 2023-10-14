import {createContext, useState} from 'react'
export const PostContext = createContext(null)

function PostContextProvider ({children} ) {
  const [postDetails,setPostDetails] = useState()

  return (
    <PostContext.Provider value={{postDetails,setPostDetails}}>
      {children}
    </PostContext.Provider>
  )
}


export default PostContextProvider