import { useEffect, useState } from "react";
import Board from "./components/Board"
import Controls from "./components/Controls"

const rows = 25;
const cols = 25;
const speed = 180;

const createGrid = (): number[][] =>
  Array.from({length: rows}, () =>
  Array.from({length: cols}, () => 0)
);

const randomGrid = (): number[][] =>
  Array.from({length: rows}, () => 
  Array.from({length: cols}, () => (Math.random() > 0.7 ? 1 : 0))
  );

const getCell = (grid: number[][], x: number, y: number): number => {
  if (x < 0 || y < 0) return 0;
  if (x >= grid.length || y >= grid[0].length) return 0;
  return grid[x][y];
};

const getNeighbors = (grid: number [][], x: number, y: number):  number=> {
  const topLeft = getCell(grid,x-1, y-1)
  const top = getCell(grid,x, y-1)
  const topRight = getCell(grid,x+1, y-1)
  const left = getCell(grid,x-1, y)
  const right = getCell(grid,x+1, y)
  const bottomLeft = getCell(grid,x-1, y+1)
  const bottom = getCell(grid,x, y+1)
  const bottomRight = getCell(grid,x+1, y+1)

  return ( 
   topLeft +
   top +
   topRight +
   left +
   right +
   bottomLeft +
   bottom +
   bottomRight 
  );
}
const nextGen = (grid: number[][]): number[][] => {
  return grid.map((row, x) =>
   row.map((cell, y) => {
    const neighbors = getNeighbors(grid, x,y);

    if (cell === 1 && (neighbors <2 || neighbors > 3)) return 0;
    if (cell === 0 && neighbors === 3) return 1;
    return cell;
   })
  );
};

export default function App() {
  const [grid, setGrid] = useState<number[][]>(() => createGrid());
  const [running, setRunning] = useState(false);

  const toggleCell = (x: number, y:number) => {
    setGrid((g) => {
      const copy = g.map((row) => [...row]);
      copy[x][y] = copy[x][y] ? 0 : 1;
      return copy;
    });
  };

useEffect(() => {
  if (!running) return;

  const id = setInterval(() => {
    setGrid((g) => nextGen(g));
  }, speed);
  return () => clearInterval(id);
}, [running]);
return (
  <div style={{textAlign: "center"}}>
    <h1>Game of Life</h1>

    <Controls
     running={running}
     toggleRun={() => setRunning((v) => !v)}
     clear={() => setGrid(createGrid())}
     random={() => setGrid(randomGrid())}
     />
     <Board grid={grid} toggleCell={toggleCell} />
  </div>
)
}