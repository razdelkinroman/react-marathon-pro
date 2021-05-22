import React from 'react';
import Heading from '../../components/Heading';
import PokemonCard from './PokemonCard';
import Layout from '../../components/Layout';
import usePokemons from '../../hooks/usePokemons';
import s from './PokemonPage.module.scss';

const PokedexPage: React.FC = () => {
  const { data, error, isLoading } = usePokemons();

  if (error) {
    return <p>Произошла ошибка при получении данных</p>;
  }

  return !isLoading ? (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading variant="title3">
          {data.totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonList}>
          {data.pokemons.map((item) => {
            return <PokemonCard key={item.name} pokemon={item} />;
          })}
        </div>
      </Layout>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PokedexPage;
