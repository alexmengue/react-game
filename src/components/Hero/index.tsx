import React from 'react';
import useEventListener from '@use-it/event-listener';

import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const initialPosition = {
  x: 1,
  y: 2
};

const Hero = () => {

  const [positionState, updatePositionState] = React.useState(initialPosition);

  useEventListener('keydown', (event:any) => {
    if (event.key === 'ArrowLeft') {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
    } else if (event.key === 'ArrowRight') {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
    } else if (event.key === 'ArrowUp') {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
    } else {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });
    }
  });

  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * positionState.y,
      left: TILE_SIZE * positionState.x,
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