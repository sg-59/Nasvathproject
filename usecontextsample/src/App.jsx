import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import First from './Pages/First'
import Third from './Pages/Third'
import Second from './Pages/Second'

function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<First/>
  },
  {
    path:"second",
    element:<Second/>
  },
  {
    path:"third",
    element:<Third/>
  },
])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
