import React from "react";

interface IProps {
  position: { x: number, y: number };
  text: number;
}

function Tile(props: IProps) {
  return (
    <div style={{
      position: 'absolute',
      left: 48 * props.position.x,
      bottom: 48 * props.position.y,
      width: 48,
      height: 48,
      border: '2px solid red'
    }}></div>
  );
}

export default Tile;