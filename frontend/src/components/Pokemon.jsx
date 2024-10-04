import React from 'react'
import "../styles/pokemon.css"

function Pokemon({ pokemon, onDelete }) {
    const formattedDate = new Date(pokemon.created_at).toLocaleDateString("en-us")

    return <div className="pokemon_container">
        <p className="pokemon-title"> {pokemon.title}</p>
        <p className="pokemon-type"> {pokemon.type}</p>
        <p className="pokemon-date">{formattedDate}</p>
        <button className="delete-button" onClick={() => onDelete(pokemon.id)}> Delete</button>
    </div>
}

export default Pokemon
