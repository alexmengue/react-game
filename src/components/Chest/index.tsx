import React from 'react';

import { TILE_SIZE } from '../../settings/constants';
import { ChestsContext } from '../../contexts/chests';

import './index.css';

interface IProps {
  initialPosition: { x: number, y: number }
}

const Chest = (props: IProps) => {
  const chestsContext = React.useContext(ChestsContext);

  const shouldAnimate = chestsContext.openedChests.positions.find((position) => {
    const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

    return match;
  });

  return (
    <div style={{
      position: 'absolute',
      top: TILE_SIZE * props.initialPosition.y,
      left: TILE_SIZE * props.initialPosition.x,
      width: TILE_SIZE,
      height: TILE_SIZE,
      backgroundImage: 'url(./assets/CHEST.png)',
      backgroundRepeat: 'no-repeat',
      animation: shouldAnimate && 'chest-animation 1s steps(2) forwards'
    }}
    />
  );
};

export default Chest;