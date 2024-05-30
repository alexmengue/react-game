import React from "react";

import { TILE_SIZE } from "../../../settings/constants";
import { ECanvas } from "../../../contexts/canvas/helpers";

interface IProps {
  position: { x: number, y: number };
  text: number;
}

const FL = ECanvas.FLOOR;
const WL = ECanvas.WALL;
const DR = ECanvas.DOOR;
const TR = ECanvas.TRAP;
const MD = ECanvas.MINI_DEMON;
const DE = ECanvas.DEMON;
const CH = ECanvas.CHEST;
const HE = ECanvas.HERO;

function Tile(props: IProps) {
  function getTileColor() {
    switch(props.text) {
      case ECanvas.FLOOR:
        return 'darkgrey';

      case ECanvas.WALL:
        return 'yellow';

      case ECanvas.HERO:
        return 'magenta';
    }
  }

  const color = getTileColor();

  return (
    <div style={{
      position: 'absolute',
      left: TILE_SIZE * props.position.x,
      top: TILE_SIZE * props.position.y,
      width: TILE_SIZE,
      height: TILE_SIZE,
      border: `1px solid ${color}`,
      color: color,
      fontSize: 32
    }}>
      {props.text}
    </div>
  );
}

export default Tile;