import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import api from "../api"
import Pokemon from "../components/Pokemon"
import "../styles/Home.css"

function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = () => {
        api.get("/api/pokemon/")
            .then((res) => res.data)
            .then((data) => { setPokemon(data); console.log(data) })
            .catch((err) => alert(err));
    }

    const deletePokemon = (id) => {
        api.delete(`/api/pokemon/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Pokemon has been deleted")
                else alert("Failed to delete Pokemon")
                getPokemon();
            }).catch((err) => alert(err))

    }

    const createPokemon = (e) => {
        e.preventDefault()
        api.post("/api/pokemon/", { type, title }).then((res) => {
            if (res.status === 201) alert("Pokemon created")
            else alert("Failed to make Pokemon")
            getPokemon();
        }).catch((err) => alert(err))

    }

    return <div>
        <div>
            <h2>WELCOME TO POKEMON APP</h2>
            <Link to='logout' >
                <button className="form-button">Logout</button>
            </Link>
            {pokemon.map((pokemon) => <Pokemon pokemon={pokemon} onDelete={deletePokemon} key={pokemon.id} />)}
        </div>
        <h2>Create a Pokemon</h2>
        <form onSubmit={createPokemon}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            <label htmlFor="type">Type:</label>
            <br />
            <input
                type="text"
                id="type"
                name="type"
                required
                onChange={(e) => setType(e.target.value)}
                value={type} />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    </div>
}

export default Home