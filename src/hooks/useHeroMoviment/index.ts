import React from 'react';
import useEventListener from '@use-it/event-listener';

import { EDirection, EWalker } from '../../settings/constants';
import { checkValidMoviment, handleNextPosition } from '../../contexts/canvas/helpers';
import { CanvasContext } from '../../contexts/canvas';

function useHeroMoviment (initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  canvasContext.updateCanvas();

  useEventListener('keydown', (event: any) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }
    
    const nextPosition = handleNextPosition(direction, positionState);
    const nextMove = checkValidMoviment(nextPosition, EWalker.HERO);

    if (nextMove.valid) {
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    }

    if (nextMove.dead) {
      alert('YOU DIED');
    }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;