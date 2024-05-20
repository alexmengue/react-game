import React from 'react';

import { GAME_SIZE } from '../../settings/constants';

import Hero from '../Hero';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';

const Board = () => {
  return (
    <div>
      <Hero />
      <MiniDemon initialPosition={{ x: 8, y: 12 }}/>
      <Demon />
      <Chest />
      <Trap />
      <img src="./assets/tileset.gif" alt="Game board"  width={GAME_SIZE} height={GAME_SIZE} />
    </div>
  );
};

export default Board;