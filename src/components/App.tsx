import React from 'react';
import '../components/App.css';

import { GAME_SIZE } from '../settings/constants';

import Board from './Board';

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
        <Board />
      </div>
    </div>
  );
}

export default App;
