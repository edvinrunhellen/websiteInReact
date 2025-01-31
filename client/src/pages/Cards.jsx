import './profiles/LushCard.css'
import { StrictMode, useContext, useState, createContext, use, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { CartContext } from '../App';

const PokemonCards = () => {
    const { cart, setCart } = useContext(CartContext)
    const [products, setProducts] = useState([]);
    const pokemonCards = [
        {
            background: '#F5EDCE',
            name: 'Pikachu',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_35.png',
            type: 'Electric',
            hp: 60,
            attack: 'Thunder Shock',
            price: '$15.99',
            link: 'https://www.pokemon.com/us/pokedex/pikachu'
        },
        {
            background: '#89C4E1',
            name: 'Charizard',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_11.png',
            type: 'Fire',
            hp: 150,
            attack: 'Fire Spin',
            price: '$199.99',
            link: 'https://www.pokemon.com/us/pokedex/charizard'
        },
        {
            background: '#58287F',
            name: 'Bulbasaur',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_1.png',
            type: 'Grass',
            hp: 45,
            attack: 'Vine Whip',
            price: '$5.99',
            link: 'https://www.pokemon.com/us/pokedex/bulbasaur'
        },
        {
            background: '#F8D210',
            name: 'Squirtle',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SM9/SM9_EN_23.png',
            type: 'Water',
            hp: 50,
            attack: 'Water Gun',
            price: '$7.49',
            link: 'https://www.pokemon.com/us/pokedex/squirtle'
        },
        {
            background: '#D72638',
            name: 'Gengar',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH45/SWSH45_EN_57.png',
            type: 'Ghost/Poison',
            hp: 110,
            attack: 'Shadow Ball',
            price: '$29.99',
            link: 'https://www.pokemon.com/us/pokedex/gengar'
        },
        {
            background: '#1B998B',
            name: 'Eevee',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH45/SWSH45_EN_48.png',
            type: 'Normal',
            hp: 70,
            attack: 'Tackle',
            price: '$4.99',
            link: 'https://www.pokemon.com/us/pokedex/eevee'
        },
        {
            background: '#FF6F61',
            name: 'Mewtwo',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_10.png',
            type: 'Psychic',
            hp: 130,
            attack: 'Psystrike',
            price: '$149.99',
            link: 'https://www.pokemon.com/us/pokedex/mewtwo'
        },
        {
            background: '#8E44AD',
            name: 'Lucario',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SM10/SM10_EN_126.png',
            type: 'Fighting/Steel',
            hp: 120,
            attack: 'Aura Sphere',
            price: '$12.99',
            link: 'https://www.pokemon.com/us/pokedex/lucario'
        },
        {
            background: '#3498DB',
            name: 'Gyarados',
            image: 'https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH35/SWSH35_EN_30.png',
            type: 'Water/Flying',
            hp: 150,
            attack: 'Dragon Rage',
            price: '$24.99',
            link: 'https://www.pokemon.com/us/pokedex/gyarados'
        }
        
    ];


const Cards = pokemonCards.map((card, i) => {
    return (
        <div key={i} className="card">
            <div className="color-box" style={{}}></div>
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
    function addToCart() {
        setCart(current => [...current, card])
    }

    

});
    
     useEffect(()=>{

        fetch("http://localhost:5000/api/products")
        .then(response=>response.json())
        .then(data=>{setProducts(data)});
     });
    
    return (
        <div className="lush-container">
            {Cards}
            <ul>

            </ul>
        </div>
    );

    
    

    

};




export default PokemonCards
