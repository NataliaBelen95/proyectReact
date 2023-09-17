
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'

import CartAdd from './components/CartAdd/CartAdd'

import Products from './components/Products/Products'



function App() {
  return (
   
    
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/myCart" element={<CartAdd />} />

          </Routes>
        </>
    
   
  );
}

export default App;