import React from "react";
import Tile from "./Tile";

import { canvas } from "../../contexts/canvas/helpers";
import { CanvasContext } from "../../contexts/canvas";

function getCanvasMap(canvas) {
  const array = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`

      array.push(<Tile key={key} position={position} text={text} />);
    }
  }

  return array;
}

function Debugger() {
  const canvasContext = React.useContext(CanvasContext);
  const tiles = getCanvasMap(canvasContext.canvas);

  return (
    <div>
      {tiles}
    </div>
  );
}

export default Debugger;