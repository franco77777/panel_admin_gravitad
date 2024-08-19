import type { canvas } from '@/types/canvasTypes'
import { useState } from 'react'

export const useHistory = (initialState: []) => {
  const [index, setIndex] = useState(0)
  const [history, setHistory] = useState<canvas[][]>([initialState])
  // console.log("index", index);
  // console.log("history", history);ddddddddddddddddddd
  // console.log("historyindex", history[index]);

  const setState = (action: ((previousState: Array<canvas>) => Array<canvas>) | Array<canvas>, overwrite = false) => {
    // console.log("action", action);
    // console.log("overwrite", overwrite);

    const newState = typeof action === 'function' ? action(history[index]) : action

    console.log('newstate', newState)

    if (overwrite) {
      const historyCopy = [...history]
      historyCopy[index] = newState
      setHistory(historyCopy)
    } else {
      const updatedState = [...history].slice(0, index + 1)
      setHistory([...updatedState, newState])
      //setHistory((prevState) => [...prevState, newState]);
      setIndex((prevState) => prevState + 1)
    }
  }
  //console.log("history", history);
  //console.log("index", index);
  type voidFunc = () => void
  const undo: voidFunc = () => index > 0 && setIndex((prevState) => prevState - 1)
  const redo: voidFunc = () => index < history.length - 1 && setIndex((prevState) => prevState + 1)

  return [history[index], setState, undo, redo] as const
}

// if (selectedElement?.size === 34) return 4.9;
// if (selectedElement?.size === 30) return 4.35;
// if (selectedElement?.size === 24) return 3.5;
// if (selectedElement?.size === 20) return 2.8;
// if (selectedElement?.size === 14) return 2;
// if (selectedElement?.size === 10) return 1.47;

// switch (element.size as number) {
//   case 34:
//     lineHeight = 39.1;
//     break;
//   case 30:
//     lineHeight = 34.6;
//     break;
//   case 24:
//     lineHeight = 27.55;
//     break;
//   case 20:
//     lineHeight = 22.9;
//     break;
//   case 14:
//     lineHeight = 16.05;
//     break;
//   case 10:
//     lineHeight = 11.5;
//     break;

//   default:
//     break;
// }
