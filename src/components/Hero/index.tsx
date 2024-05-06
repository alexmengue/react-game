import React from 'react';

import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const Hero = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * 2,
      left: TILE_SIZE,
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: 'url(./assets/HERO.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      animation: 'hero-animation 1s steps(4) infinite'
    }}
    />
  );
};

export default Hero;