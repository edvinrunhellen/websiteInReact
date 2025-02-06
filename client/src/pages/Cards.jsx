import './profiles/LushCard.css'
import { StrictMode, useContext, useState, createContext, use, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { CartContext } from '../App';

const pokemonCards = () => {
    const [pokemonCards, setPokemonCards] = useState([]);
    const { cart, setCart } = useContext(CartContext)


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data); 
                    setPokemonCards(data); 
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts(); 
    }, []);


    const addToCart = (card) => {
        setCart(current => [...current, card]);
        console.log(cart)
    };


    const Cards = pokemonCards.map((card, i) => {
        return (
            <div key={i} className="card">
                <div className="color-box" style={{ backgroundColor: card.background }}></div>
                <img src={card.image} alt={card.name} className="pokemonImage" />
                <div className="cardText">
                    <h2>{card.name}</h2>
                    <p>Type: {card.type}</p>
                    <p>HP: {card.hp}</p>
                    <p>Attack: {card.attack}</p>
                    <p>Price: {card.price}</p>
                </div>
                <button onClick={() => addToCart(card)}>Add to Cart</button>
                {console.log(card)}
            </div>
        );
    });

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item, index) => (
                    <li key={index}>{item.name} {item.price}</li>
                ))}
            <h1>Cards for purchase</h1>
            <div className="cards-container">
                {Cards}
            </div>
            <h2>Cart</h2>
            
        </div>
    );
};

export default pokemonCards
