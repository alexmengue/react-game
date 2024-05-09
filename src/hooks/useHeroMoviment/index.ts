import React from 'react';
import useEventListener from '@use-it/event-listener';

function useHeroMoviment (initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirection] = React.useState('RIGHT');

  useEventListener('keydown', (event: any) => {
    if (event.key === 'ArrowLeft') {
      updatePositionState({ x: positionState.x - 1, y: positionState.y });
      updateDirection('LEFT');      

    } else if (event.key === 'ArrowRight') {
      updatePositionState({ x: positionState.x + 1, y: positionState.y });
      updateDirection('RIGHT');

    } else if (event.key === 'ArrowUp') {
      updatePositionState({ x: positionState.x, y: positionState.y + 1 });
      
    } else if (event.key === 'ArrowDown') {
      updatePositionState({ x: positionState.x, y: positionState.y - 1 });
    }
  });

  return {
    position: positionState,
    direction: direction
  }
}

export default useHeroMoviment;