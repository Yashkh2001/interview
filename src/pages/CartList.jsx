import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../App'

const CartList = () => {
  const navigate = useNavigate()
    const {cartList,setCartList}=useContext(cartContext)

    const[price,setPrice]=useState(0)

    useEffect(() => {
      console.log(cartList,'cartlist')
      let price=0
      cartList.forEach(element => {
        price+=element.price
      });

      

      setPrice(price)
    }, [])



  return (
    <div>
    Cart List
    {cartList.length > 0 && 
    <>
      <div className='cartGrid'>
       {cartList.map(function (data, idx) {
        return(
          <>
            <div key={data.id} className="cartCard">
               <img src={data.image} alt="" />
                <p>{data.title}</p>
                <p>{data.price}</p>

            </div>

          </>
        )
       })}
       </div>
<div>
  Total Price: {price}
</div>
       </>
    }{
      cartList.length == 0 && 
      <div>
        Loading...
      </div>

    }
    
    </div>
  )
}

export default CartList