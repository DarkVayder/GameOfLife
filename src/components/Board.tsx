import React from "react";

type BoardProps = {
    grid: number[][];
    toggleCell: (row: number, col: number) => void;
};

const Board: React.FC<BoardProps> = ({ grid, toggleCell}) => {
    return(
        <table className="board">
        <tbody>
            {grid.map((row, r) => (
                <tr key={r}>
                    {row.map((cell, c) => (
                        <td key={c}
                            className={cell ? "alive" : ""}
                            onClick= {() => toggleCell(r, c)}
                            
                        />
                    ))}
                </tr>
            ))}
        </tbody>

        <style> {`  
        .board {
            margin: auto;
            border-collapse: collapse;
            border: 1px solid #ccc
            }

         td {
         width: 22px;
         height: 22px;
         border: 1px solid #ddd;
         background: white;
         cursor: pointer;
         transition: all 0.2s ease;
         }

         td.alive{
         background: #111;
         transform: scale(1.05);
         box-shadow: 0 0 6px #000;
         }
        `}
        </style>
    </table>
    )
}

export default Board;