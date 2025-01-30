
import { use, useState } from 'react'
import { CartContext } from '../App'

function Checkout() {
  const { cart } = use(CartContext)
  console.log(cart)
  return (
      <div>
    <div>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (   
        cart.map((item, i) => (
          <div key={i} className="card">
            <div style={{ backgroundColor: item.background }}></div>
            <img src={item.image} className="image" />
            <div>
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
            </div>
            
          </div>
        ))
      )}
      </div>
      <button>Complete order</button>
      </div>
);
}

export default Checkout
