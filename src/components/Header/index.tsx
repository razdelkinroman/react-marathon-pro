import React, { memo } from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { GENERAL_MENU } from '../../routes';

import { ReactComponent as Logo } from './assets/Logo.svg';
import s from './Header.module.scss';

const Header = () => {
  const path = usePath();
  return (
    <div>
      <div className={s.root}>
        <div className={s.pokemonLogo}>
          <Logo />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map((i) => (
            <A className={cn(s.menuLink, { [s.activeLink]: i.link === path })} href={i.link} key={i.name}>
              {i.name}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
