import React, { useContext } from 'react'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import { CartItem } from '../Context'


const Home = () => {
  const {products} = useContext(CartItem)
  return (
    <div style={{textAlign : "center"}}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
         {products.map((product)=>{
          return <SingleProduct product={product} key={product.id}/>
         })}
      </div>
    </div>
  )
}

export default Home