import './App.css'

import pokemonPic from "./assets/pokemon.png"
import {useEffect, useState} from "react";
import useFetchPokemon from "./custom-hooks/useFetchPokemon.jsx";

function App() {
  const [offset, setOffset] = useState(0);
  const { loading, pokemonList, error } = useFetchPokemon(offset);
  return (
    <>
      <main>
        <header>
          <div className="img-container">
            <img src={pokemonPic}/>
          </div>
          <div className="button-container">
            <button>Vorige</button>
            <button>Volgende</button>
          </div>
        </header>
        <section className="pokemon-container">
        </section>
      </main>
    </>
  )
}

export default App
