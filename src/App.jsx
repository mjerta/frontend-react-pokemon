import './App.css'

import pokemonPic from "./assets/pokemon.png"
import {useEffect, useState} from "react";
import useFetchPokemon from "./custom-hooks/useFetchPokemon.jsx";

function App() {
  const [offset, setOffset] = useState(0);
  const {loading, pokemonList, error} = useFetchPokemon(offset);

  function handleButton(e) {
    if (e.target.name === "previous") {
      setOffset((prev) => prev - 20);
      console.log("previous")
    }
    if ( e.target.name === "next") {
      setOffset((prev) => prev + 20);
      console.log("next")
    }

  }

  return (
    <>
      <main>
        <header>
          <div className="img-container">
            <img src={pokemonPic}/>
          </div>
          <div className="button-container">
            <button
              name={"previous"}
              onClick={(e) => handleButton(e)}
              disabled={offset === 0}
            >
              Vorige
            </button>
            <button
              name={"next"}
              onClick={(e) => handleButton(e)}
              disabled={offset === 80}
            >
              Volgende
            </button>
          </div>
        </header>
        <section className="pokemon-container">
        </section>
      </main>
    </>
  )
}

export default App
