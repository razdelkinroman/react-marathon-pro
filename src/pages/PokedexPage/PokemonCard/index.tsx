import React from 'react';
import Heading from '../../../components/Heading';

import { PokemonsRequest } from '../Model';
import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  pokemon: PokemonsRequest;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, stats, types, img } = pokemon;
  const { attack, defense } = stats;

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading variant="title4" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type: string) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
