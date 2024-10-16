import './App.css'

import pokemonPic from "./assets/pokemon.png"
import {useEffect, useState} from "react";
import useFetchPokemon from "./custom-hooks/useFetchPokemon.jsx";
import PokemonCard from "./components/pokemon-card/PokemonCard.jsx";

function App() {
  const [offset, setOffset] = useState(0);
  const {loading, pokemonList, error} = useFetchPokemon(offset);

  function handleButton(e) {
    if (e.target.name === "previous") {
      setOffset((prev) => prev - 20);
    }
    if (e.target.name === "next") {
      setOffset((prev) => prev + 20);
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
          {pokemonList.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                url={pokemon.url}
              />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
