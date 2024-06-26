import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

interface IProps {
  initialPosition: { x: number, y: number }
}

const Chest = (props: IProps) => {
  return (
    <div style={{
      position: 'absolute',
      top: TILE_SIZE * props.initialPosition.y,
      left: TILE_SIZE * props.initialPosition.x,
      width: TILE_SIZE,
      height: TILE_SIZE,
      backgroundImage: 'url(./assets/CHEST.png)',
      backgroundRepeat: 'no-repeat',
      animation: 'chest-animation 1s steps(3) infinite'
    }}
    />
  );
};

export default Chest;