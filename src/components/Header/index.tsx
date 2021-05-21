import React from 'react';

import { ReactComponent as Logo } from './assets/Logo.svg';
import s from './Header.module.scss';

interface IMenu {
  name: string;
  link: string;
}
const Menu: IMenu[] = [
  { name: 'Home', link: '#' },
  { name: 'Pokédex', link: '#' },
  { name: 'Legendaries', link: '#' },
  { name: 'Documentation', link: '#' },
];

const Header = () => {
  return (
    <div>
      <div className={s.root}>
        <div className={s.pokemonLogo}>
          <Logo />
        </div>
        <div className={s.menuWrap}>
          {Menu.map((i) => (
            <a className={s.menuLink} href={i.link} key={i.name}>
              {i.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
