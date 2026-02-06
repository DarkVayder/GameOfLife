import { useEffect, useState } from "react";
import { createGrid, randomGrid, nextGen} from "../gameOfLife"

export function useGameOfLife (rows: number, cols: number, speed = 180) {
    const [grid, setGrid] = useState<number[][]>(() => createGrid(rows,cols));
    const [running, setRunning] = useState(false);

 const toggleCell = (x: number, y:number) => {
    setGrid((g) => {
      const copy = g.map((row) => [...row]);
      copy[x][y] = copy[x][y] ? 0 : 1;
      return copy;
    });
  };

const clear = () => setGrid(createGrid(rows, cols));
const randomize = () => setGrid(randomGrid(rows, cols));


useEffect(() => {
  if (!running) return;

  const id = setInterval(() => {
    setGrid((g) => nextGen(g));
  }, speed);

  return () => clearInterval(id);
}, [running, speed]);

return{
    grid, running, setRunning, toggleCell, clear, randomize 
};}