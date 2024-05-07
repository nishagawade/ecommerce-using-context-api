import React, { useContext } from 'react'
import { CartItem } from '../Context'

const SingleProduct = ({ product, id }) => {

  const {cart ,setCart} = useContext(CartItem)
  return (
    <div className="products">
      <img src={product.img} alt={product.title} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.title}</span>
        <span>₹ {product.price}</span>
      </div>

      {
        cart.includes(product) ? 
        <button className="add remove" onClick={()=>setCart(cart.filter((c) => c.id !== product.id))}>Remove From Cart</button>
        :

        <button className='add' onClick={()=>setCart([...cart, product ])}>Add to Cart</button>
      }

    </div>
  )
}

export default SingleProduct