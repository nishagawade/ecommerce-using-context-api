import React, { useContext } from 'react'
import { CartItem } from '../Context'
import SingleProduct from './SingleProduct'

const Cart = () => {

  const {cart} = useContext(CartItem)
  return (
    <div style={{textAlign : 'center'}}>
      <span style={{fontSize : 30}}>My Cart</span>
      <div className="productContainer">
        {cart.map((product)=>{
          return(
            <SingleProduct product={product} key={product.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Cart