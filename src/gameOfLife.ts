export type Grid = number[][];

export const createGrid = (rows: number, cols: number): Grid =>
  Array.from({length: rows}, () =>
  Array.from({length: cols}, () => 0)
);

export const randomGrid = (rows: number, cols: number): Grid =>
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
export const nextGen = (grid: number[][]): number[][] => {
  return grid.map((row, x) =>
   row.map((cell, y) => {
    const neighbors = getNeighbors(grid, x,y);

    if (cell === 1 && (neighbors <2 || neighbors > 3)) return 0;
    if (cell === 0 && neighbors === 3) return 1;
    return cell;
   })
  );
};
