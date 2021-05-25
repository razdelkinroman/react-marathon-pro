import React from 'react';
import Spinner from '../../components/Spinner';
import { PokemonsRequest } from '../PokedexPage/Model';
import useData from '../../hooks/useData';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemons', { id });
  console.log('data', data);
  if (isLoading) {
    return <Spinner />;
  }

  return <div>This is pokemonm id quals {data?.name}</div>;
};

export default Pokemon;
