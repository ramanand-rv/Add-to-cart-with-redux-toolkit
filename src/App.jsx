import { useState } from 'react'
import Products from './components/Products'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />} >
    <Route index element={<Dashboard />} />
    <Route path='/cart' element={<Cart />} />

  </Route>
))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
