import React, { PropsWithChildren } from 'react';
import HomePage from './pages/HomePage';
import EmptyPage from './pages/EmptyPage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage, { PokemonProps } from './pages/PokemonPage';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATIONS = './documentation',
  POKEMON = '/pokedex/:id',
}

interface IGeneralMenu {
  name: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  { name: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { name: 'Pokédex', link: LinkEnum.POKEDEX, component: () => <PokedexPage /> },
  { name: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <EmptyPage title="Legendaries" /> },
  { name: 'Documentation', link: LinkEnum.DOCUMENTATIONS, component: () => <EmptyPage title="Documentation" /> },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    name: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
  },
];

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
