import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const ProductList = ({addCart}) => {
  const navigate = useNavigate()
  const [productList, setProductList] = React.useState([])
  const [cartList, setCartList] = React.useState([])
  const [count,setCount]=React.useState(0)






  useEffect(() => {
    // axios.get('https://fakestoreapi.com/products').then((response)=>{
    //    console.log(response)



    //   setProductList(response.data)
    //   console.log(productList)
    // }).catch((err)=>{
    //   console.log(err,'error')
    // })

    axios
      .get("https://fakestoreapi.com/products", {
        responseType: "json",
      })
      .then(function (response) {
        console.log(response.data);
        setProductList(response.data)

      });

  }, [])


  const addtoCart = (e,data) => {
    e.preventDefault()
    console.log(data)
    
   cartList.push(data)
   setCartList(cartList)
    console.log(cartList,'cartlist')
    setCount(cartList.length)
    // localStorage.setItem(cartList)
    // navigate('cartlist')
  }



  return (
   
      <div className='productbody'>
        <Header count={count}></Header>
        {productList.length > 0 && 
        <>
          {productList.map(function (data, idx) {
          return (
            <>



              <div key={idx} className='card'>

                <img src={data.image} alt="" />
                <p>{data.title}</p>
                <p>{data.price}</p>

                <button onClick={(e) =>{addtoCart(e,data);addCart(cartList)}}>
                  Add To Cart
                </button>


              </div>
            </>

          )
        })}
        </>
        }
      
        {
          productList.length == 0 && 
      <div>
        Loading...
      </div>

    }


      </div>
   
  )
}

export default ProductList