
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductList from './pages/productList';
import CartList from './pages/CartList';
import React, { useState } from 'react';
export const cartContext = React.createContext()
function App() {
  const [cartList,setCartList]=useState([])
  const movecart=(msg)=>{
    setCartList(msg)
  }

  const value = React.useMemo(() => ({
    cartList, setCartList
  }), [cartList]);

  return (
    <cartContext.Provider value={ value }> 
    <>
      <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<ProductList addCart={movecart}/>}></Route>
           <Route exact path="/cartlist" element={<CartList/>}></Route>
         </Routes>

      </BrowserRouter>
    
    </>
    </cartContext.Provider>
  );
}

export default App;
