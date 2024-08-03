import React from 'react';
import useInterval from '@use-it/interval';

import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';

function useEnemyMoviment (initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

useInterval(function move() {
    const random = Math.floor(Math.random() * 4);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const moviment = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY)

    if (moviment.nextMove.valid) {
      updateDirectionState(randomDirection);
      updatePositionState(moviment.nextPosition);
    }

    if (moviment.nextMove.dead) {
      alert('YOU DIED!');
      window.location.reload();
    }
  }, 2000);

  return {
    position: positionState,
    direction: direction
  }
}

export default useEnemyMoviment;