import './App.css'

import pokemonPic from "./assets/pokemon.png"
import {useEffect, useState} from "react";

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true)



    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }

  }, []);

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
