export const TILE_SIZE = 48;
export const DEMON_TILE_SIZE = TILE_SIZE * 2;
export const GAME_SIZE = 20 * TILE_SIZE;
export const HEAD_OFFSET = 12;

export enum EDirection {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
  UP = 'ArrowUp',
  DOWN = 'ArrowDown'
}

export enum EWalker {
  HERO = 'hero',
  ENEMY = 'enemy',
}