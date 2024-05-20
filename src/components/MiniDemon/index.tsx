import React from 'react';

import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import useEnemyMoviment from '../../hooks/useEnemyMoviment';

import './index.css';

const moviment = {
  position: { x: 8, y: 15 },
  direction: EDirection.RIGHT
};

interface IProps {
  position: {
    x: number;
    y: number
  }
};

const MiniDemon = (props: IProps) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * moviment.position.y,
      left: TILE_SIZE * moviment.position.x,
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: 'url(./assets/MINI-DEMON.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      animation: 'mini-demon-animation 1s steps(4) infinite',
      transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`
    }}
    />
  );
};

export default MiniDemon;