import React from 'react';
import useEventListener from '@use-it/event-listener';

import { EDirection } from '../../settings/constants';
import { checkValidMoviment, handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment (initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: any) => {
    const direction = event.key as EDirection;

    if (direction.indexOf('Arrow') === -1) {
      return;
    }
    
    const nextPosition = handleNextPosition(direction, positionState);
    const isValidMoviment = checkValidMoviment(nextPosition);

    if (isValidMoviment) {
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;