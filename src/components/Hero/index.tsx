import React from 'react';

import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';

import useHeroMoviment from '../../hooks/useHeroMoviment';

import './index.css';

const initialPosition = {
  x: 1,
  y: 2
};

const Hero = () => {
  const { position, direction } = useHeroMoviment(initialPosition);

  return (
    <div style={{
      position: 'absolute',
      top: TILE_SIZE * position.y,
      left: TILE_SIZE * position.x,
      width: TILE_SIZE,
      height: TILE_SIZE + HEAD_OFFSET,
      backgroundImage: 'url(./assets/HERO.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
      animation: 'hero-animation 1s steps(4) infinite',
      transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
    }}
    />
  );
};

export default Hero;