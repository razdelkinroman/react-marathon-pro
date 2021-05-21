import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading variant="title1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading variant="title3">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button color="green" size="large" onClick={(e) => console.log('Click')}>
            See pokemons
          </Button>
        </div>
        <div className={s.cotentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
