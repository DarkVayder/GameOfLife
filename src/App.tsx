import Board from "./components/Board"
import Controls from "./components/Controls"
import { useGameOfLife } from "./hooks/useGameOfLife";

const rows = 25;
const cols = 25;
const speed = 180;

export default function App() {
const {grid, running, setRunning, toggleCell, clear, randomize} = 
useGameOfLife(rows, cols, speed)

return (
  <div style={{textAlign: "center"}}>
    <h1>Game of Life</h1>

    <Controls
     running={running}
     toggleRun={() => setRunning((v) => !v)}
     clear={clear}
     random={randomize}
     />

     <Board grid={grid} toggleCell={toggleCell} />
  </div>
)
}