import React from 'react';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import PokemonCard from './PokemonCard';
import Layout from '../../components/Layout';

import pokemons from './data';
import s from './PokemonPage.module.scss';

// interface IEmptyPageProps {
//   title?: string;
// }

const PokedexPage: React.FC = () => {
  return (
    <div className={s.root}>
      <Header />

      <Layout className={s.contentWrap}>
        <Heading variant="title3">
          800 <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonList}>
          {pokemons.map((item) => {
            return <PokemonCard pokemon={item} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
