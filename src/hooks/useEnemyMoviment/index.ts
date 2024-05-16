import React from 'react';
import useInterval from '@use-it/interval';

import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMoviment (initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirection] = React.useState(EDirection.RIGHT);

useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];
    const nextPosition = handleNextPosition(randomDirection, positionState);
    
    updateDirection(randomDirection);
    updatePositionState(nextPosition);
  }, 2000);

  return {
    position: positionState,
    direction: direction
  }
}

export default useEnemyMoviment;