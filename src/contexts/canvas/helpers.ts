import React from "react";

import { EDirection } from "../../settings/constants";

export function handleNextPosition(direction, position) {

  switch(direction) {
    case EDirection.LEFT:
      return { x: position.x - 1, y: position.y };

    case EDirection.RIGHT:
      return { x: position.x + 1, y: position.y };

    case EDirection.UP:
      return { x: position.x, y: position.y - 1 };

    case EDirection.DOWN:
      return { x: position.x, y: position.y + 1 }
  }
}

export enum ECanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7
}

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HE = ECanvas.HERO;

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, WL],
  [WL, HE, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
];

export function checkValidMoviment(nextPosition) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x]

  getHeroValidMoves(canvasValue)

  if (canvasValue === ECanvas.WALL) {
    return false;
  }

  if (canvasValue === ECanvas.CHEST) {
    console.log('chest open');
  }

  if (canvasValue === ECanvas.TRAP) {
    console.log('died on trap');
  }

  return true;
}

function getHeroValidMoves(canvasValue) {
  return {
    valid: canvasValue === ECanvas.FLOOR || canvasValue === ECanvas.CHEST || canvasValue === ECanvas.TRAP,
    dead:  canvasValue === ECanvas.TRAP || canvasValue === ECanvas.MINI_DEMON || canvasValue === ECanvas.DEMON,
    chest: canvasValue === ECanvas.CHEST,
    door: canvasValue === ECanvas.DOOR
  }
}

function getEnemyValidMoves() {
  //soon
}