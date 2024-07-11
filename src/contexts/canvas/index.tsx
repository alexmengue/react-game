import React from "react";
import { canvas } from "./helpers";

export const CanvasContext = React.createContext({
  canvas: [],
  updateCanvas: () => null
});

function CanvasProvider() {
  const [canvasState, updateCanvasState] = React.useState({
    canvas: canvas,
    updateCanvas: () => {
      console.log('updateCanvas');
    }
  });
};