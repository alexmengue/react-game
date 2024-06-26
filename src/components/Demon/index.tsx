import React from 'react';

import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from '../../settings/constants';

import useEnemyMoviment from '../../hooks/useEnemyMoviment';

import './index.css';

const initialPosition = {
  x: 5,
  y: 5
};

interface IProps {
  initialPosition: {
    x: number;
    y: number
  }
};

const Demon = (props: IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);

  return (
    <div style={{
      position: 'absolute',
      top: TILE_SIZE * moviment.position.y,
      left: TILE_SIZE * moviment.position.x,
      width: DEMON_TILE_SIZE,
      height: DEMON_TILE_SIZE,
      backgroundImage: 'url(./assets/DEMON.png)',
      backgroundRepeat: 'no-repeat',
      animation: 'demon-animation 1s steps(4) infinite',
      transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`
    }}
    />
  );
};

export default Demon;