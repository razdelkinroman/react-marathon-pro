import React from 'react';
import HomePage from './pages/HomePage';
import EmptyPage from './pages/EmptyPage';
import PokedexPage from './pages/PokedexPage';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATIONS = './documentation',
}

interface IGeneralMenu {
  name: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  { name: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { name: 'Pokédex', link: LinkEnum.POKEDEX, component: () => <PokedexPage /> },
  { name: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <EmptyPage title="Legendaries" /> },
  { name: 'Documentation', link: LinkEnum.DOCUMENTATIONS, component: () => <EmptyPage title="Documentation" /> },
];

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
