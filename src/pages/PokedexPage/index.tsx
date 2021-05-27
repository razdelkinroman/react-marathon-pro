import React, { useState, useEffect } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from './PokemonCard';
import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
import useData from '../../hooks/useData';
import useDebounce from '../../hooks/useDebounce';

import { IPokemons, PokemonsRequest } from './Model';

import s from './PokemonPage.module.scss';

interface IQuery {
  limit: number;
  name?: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 12 });
  const debouncedValue = useDebounce(searchValue, 500);
  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };

  useEffect(() => {}, [debouncedValue]);

  if (isError) {
    return <p>Произошла ошибка при получении данных</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading variant="title3">
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>

        <input
          className={s.inputWrapper}
          type="text"
          placeholder="input name pokemon"
          value={searchValue}
          onChange={handleSearchChange}
        />

        <div className={s.pokemonList}>
          {data?.pokemons.map((pokemon: PokemonsRequest) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
