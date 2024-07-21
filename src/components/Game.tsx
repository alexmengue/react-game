import React from 'react';

import Board from './Board';
import Debugger from './Debugger';
import ChestsProvider from '../contexts/chests';
import CanvasProvider from '../contexts/canvas';

function Game() {
  return (
    <CanvasProvider>
      <ChestsProvider>
        <Debugger />
        <Board />
      </ChestsProvider>
    </CanvasProvider>
  )
};

export default Game;