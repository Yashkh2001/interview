import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { cartContext } from '../pages/productList'

const Header = (props) => {
    const navigate = useNavigate()
    // const {cartList,setCartList}=useContext(cartContext)

    // useEffect(() => {
    //   console.log(cartList,'cartlist')
    // }, [])
    

  return (
    <div className='navbar'>
      <p>Header</p>
      <NavLink to="/cartlist" >
      <div style={{position:'relative'}}>
      <span className='counter'>{props.count}</span>
      <i class="fa-solid fa-cart-shopping"></i>
      </div>
      </NavLink>
    </div>
  )
}

export default Header