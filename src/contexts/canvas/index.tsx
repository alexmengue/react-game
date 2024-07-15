import React from "react";
import { canvas, checkValidMoviment, handleNextPosition } from "./helpers";
import { EWalker } from "../../settings/constants";

interface IProps {
  children: React.ReactNode;
}

export const CanvasContext = React.createContext({
  canvas: [],
  updateCanvas: (direction, position, walker) => null
});

function CanvasProvider(props: IProps) {
  const [canvasState, updateCanvasState] = React.useState({
    canvas: canvas,
    updateCanvas: (direction, position, walker) => {
      const nextPosition = handleNextPosition(direction, position);
      const nextMove = checkValidMoviment(nextPosition, walker);

      return {
        nextPosition,
        nextMove
      }
    }
  });

  return (
    <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
  )
};

export default CanvasProvider;