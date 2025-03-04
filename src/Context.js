import React, { createContext, useState } from 'react';
import { faker } from '@faker-js/faker';

export const CartItem = createContext();
faker.seed(100)

const Context = ({ children }) => {

    const [cart, setCart] = useState([])

   const productsArray = [
    {
      id: 1,
      title: "Samsung S21",
      description: "black in color",
      price: "25000",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 1,
    },
    {
      id: 2,
      title: "Samsung M21",
      description: "white in color",
      price: "23000",
      img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 1,
    },
    {
      id: 3,
      title: "Redmi 9",
      description: "black in color",
      price: "35000",
      img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 4,
      title: "Iphone 12",
      description: "Best mobile ever",
      price: "90500",
      img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 5,
      title: "Samsung S21",
      description: "black in color",
      price: "25000",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 1,
    },
    {
      id: 6,
      title: "Redmi 9",
      description: "black in color",
      price: "35000",
      img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 7,
      title: "Samsung S21",
      description: "black in color",
      price: "25000",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 1,
    },
    {
      id: 8,
      title: "Iphone 12",
      description: "Best mobile ever",
      price: "90500",
      img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 9,
      title: "Samsung S21",
      description: "black in color",
      price: "25000",
      img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 1,
    },
  ];
  
     

    const [products] = useState(productsArray)
    console.log(products)
    return (
        <CartItem.Provider  value={{cart, setCart, products}}>
            {children}
        </CartItem.Provider>
    )
}



export default Context