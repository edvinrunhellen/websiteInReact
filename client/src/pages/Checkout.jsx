import { use, useState } from 'react'
import { CartContext } from '../App'

function Checkout() {
  const { cart } = use(CartContext)
  console.log(cart)
    return (
        <div>
            {cart.map((item) => (
                <li key={item}>{item.name}</li>
            ))}
        </div>
    )
  
}

export default Checkout
