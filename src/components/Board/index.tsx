import React from 'react';

import { GAME_SIZE } from '../../settings/constants';

import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';

const Board = () => {
  return (
    <div>
      <Hero />
      <MiniDemon />
      <Demon />
      <img src="./assets/tileset.gif" alt="Game board"  width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
};

export default Board;