import React from 'react';
import useInterval from '@use-it/interval';

import { EDirection } from '../../settings/constants';
import { checkValidMoviment, handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMoviment (initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextPosition = handleNextPosition(randomDirection, positionState);
    const isValidMoviment = checkValidMoviment(nextPosition);

    if (isValidMoviment) {
      updateDirectionState(randomDirection);
      updatePositionState(nextPosition);
    }
  }, 2000);

  return {
    position: positionState,
    direction: direction
  }
}

export default useEnemyMoviment;