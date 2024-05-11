import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import First from './Pages/First'
import Third from './Pages/Third'
import Second from './Pages/Second'
import Usememo1 from './Pages/Usememo1'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'
import Signup from './Pages/Signup'

function App() {

const userMail=useSelector((state)=>state.user.Logininfo)
console.log("userMail",userMail);

const router=createBrowserRouter([
  {
    path:"/",
    element: userMail ? <First/> : <Login/>
  },
  {
    path:"second",
    element:<Second/>
  },
  {
    path:"third",
    element:<Third/>
  },
  {
    path:"memo",
    element:<Usememo1/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
