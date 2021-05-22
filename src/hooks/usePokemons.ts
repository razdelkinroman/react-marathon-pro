import { useEffect, useState } from 'react';
import request from '../utils/request';
import { IPokemon } from '../pages/PokedexPage/PokemonCard';

interface IPocemonRequest {
  totalPokemons: number;
  pokemons: IPokemon[];
}

const initialValue = {
  totalPokemons: 0,
  pokemons: [],
};

const usePokemons = () => {
  const [data, setData] = useState<IPocemonRequest>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    request('getPokemons')
      .then((resp) => {
        setData(resp);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};

export default usePokemons;
