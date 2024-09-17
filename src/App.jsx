import { Route,Routes } from 'react-router-dom'
import Home_page from './pages/Home_page'
import Product_page from './pages/Product_page'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Home_page/>}/>
    <Route path='/product/:productId' element={<Product_page/>}/>
    </Routes>
  )
}

export default App
