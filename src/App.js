
import './App.css';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ViewPost from './Pages/ViewPost'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AuthContext } from './store/Context';
import { auth} from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import Create from './Components/Create/Create';
import PostContextProvider from './store/PostContext';

function App() {
  const {user,setUser} = useContext(AuthContext)
  useEffect(() =>{
    console.log(user)
    onAuthStateChanged(auth,(user) => {
      setUser(user)
    })
  },[user,setUser])
  return (
    <div className="App">

      <PostContextProvider>
        <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sell' element={<Create/>}/>
          <Route path='/view' element={<ViewPost/>}/>
        </Routes>
      </Router>
      </PostContextProvider>
      
      
    </div>
  );
}

export default App;
