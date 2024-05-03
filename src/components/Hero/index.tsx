import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Hero = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * 2,
      left: TILE_SIZE,
      width: TILE_SIZE,
      height: 100,
      backgroundImage: 'url(./assets/HERO.png)',
      backgroundRepeat: 'no-repeat',
      animation: 'hero-animation 1s steps(4) infinite'
    }}
    />
  );
};

export default Hero;