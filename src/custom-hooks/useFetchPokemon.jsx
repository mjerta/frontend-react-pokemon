import { useState, useEffect } from "react";
import axios from "axios";

function useFetchPokemon(offset) {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        console.log(offset)
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        setPokemonList(response.data.results); // Note: results, not result
        console.log(response.data.results);
      } catch (e) {
        console.error(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();

  }, [offset]);

  return { loading, pokemonList, error };
}
export default useFetchPokemon;