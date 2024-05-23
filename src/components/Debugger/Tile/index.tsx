import React from "react";

import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number, y: number };
  text: number;
}

function Tile(props: IProps) {
  return (
    <div style={{
      position: 'absolute',
      left: TILE_SIZE * props.position.x,
      bottom: TILE_SIZE * props.position.y,
      width: TILE_SIZE,
      height: TILE_SIZE,
      border: '2px solid red'
    }}></div>
  );
}

export default Tile;