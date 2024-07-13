import React from "react";
import { canvas } from "./helpers";

interface IProps {
  children: React.ReactNode;
}

export const CanvasContext = React.createContext({
  canvas: [],
  updateCanvas: () => null
});

function CanvasProvider(props: IProps) {
  const [canvasState, updateCanvasState] = React.useState({
    canvas: canvas,
    updateCanvas: () => {
      console.log('updateCanvas');
    }
  });

  return (
    <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
  )
};

export default CanvasProvider;