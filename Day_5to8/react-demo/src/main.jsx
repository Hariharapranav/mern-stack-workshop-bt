import { createRoot } from 'react-dom/client'
import App from './jsx/App'
import Product from './jsx/Product'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/product' element={<Product />}></Route>
    <Route path='/login' element={<Login />}></Route>
   </Routes>
  </BrowserRouter>
  
)
