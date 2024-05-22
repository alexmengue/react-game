import React from 'react';
import '../components/App.css';

import { GAME_SIZE } from '../settings/constants';

import Board from './Board';
import Debugger from './Debugger';

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE
        }}
        >
        <Debugger />
        <Board />
      </div>
    </div>
  );
}

export default App;
