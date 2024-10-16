import "./PokemonCard.css"
import {useEffect, useState} from "react";
import axios from "axios";
function PokemonCard({url}) {
  const [error,setError] = useState(true)
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null)
  const [moves, setMoves] = useState([])
  const [weight, setWeight] = useState(null)
  const [abilities, setAbilities] = useState([])


  useEffect(() => {
    async function fetchPokemonCard(url) {
      try {
        setLoading(true)
        const response = await axios.get(url);
        setImage(response.data.sprites.back_default);
        setName((response.data.name));
        setMoves(response.data.moves);
        setWeight(response.data.weight)
        setAbilities(response.data.abilities)

      } catch (e) {
        console.error(e);
      }
      finally {
        setLoading(false)
      }
    }
    fetchPokemonCard(url);
  }, [url])
  return (
    <article className="pokemon-card">
      <div className="main-details">
      <h1>{name}</h1>
      <img src={image} alt={"Pokemon"}/>
        <p><strong>Moves: </strong>{moves.length}</p>
        <p><strong>Weight: </strong>{weight}</p>
      </div>
      <div className="abilities-box">
        <strong>Abilities:</strong>
      {abilities.length > 0 && abilities.map(ability => (
        <>
          <p key={ability.slot}>{ability.ability.name}</p>


        </>
      ))}
      </div>

    </article>
  )
}

export default PokemonCard;