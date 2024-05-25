import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Chest = () => {
  return (
    <div style={{
      position: 'absolute',
      top: TILE_SIZE * 2,
      left: TILE_SIZE * 12,
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