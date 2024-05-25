import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Trap = () => {
  return (
    <div style={{
      position: 'absolute',
      top: TILE_SIZE * 9,
      left: TILE_SIZE * 15,
      width: TILE_SIZE,
      height: TILE_SIZE,
      backgroundImage: 'url(./assets/TRAP.png)',
      backgroundRepeat: 'no-repeat',
      animation: 'trap-animation 1s steps(8) infinite'
    }}
    />
  );
};

export default Trap;