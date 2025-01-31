
import { use, useState, useContext } from 'react'
import { CartContext } from '../App'

function Checkout() {
  const { cart } = useContext(CartContext)


  const completeOrder = () => {
    // Skicka
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Order posted successfully:", data);
        //rensa han
        setCart([]);
      })
      .catch(error => {
        console.error('Error posting order:', error);
      });
  };
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
      <button onClick={completeOrder}>Complete order</button>
      </div>
);
}

export default Checkout
