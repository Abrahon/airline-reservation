
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './Routes/Routes/Routes'

function App() {

  return (
   <div className='mx-5'>
       <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
