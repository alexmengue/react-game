import React from 'react';
import useEventListener from '@use-it/event-listener';

import { EDirection } from '../../settings/constants';

function useEnemyMoviment (initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirection] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: any) => {
    if (event.key === EDirection.LEFT) {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
      updateDirection(EDirection.LEFT);      

    } else if (event.key === EDirection.RIGHT) {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
      updateDirection(EDirection.RIGHT);

    } else if (event.key === EDirection.UP) {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
      
    } else if (event.key === EDirection.DOWN) {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });
    }
  });

  return {
    position: positionState,
    direction: direction
  }
}

export default useEnemyMoviment;