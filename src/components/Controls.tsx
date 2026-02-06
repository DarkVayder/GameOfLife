import { FaPlay } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { CiTrash } from "react-icons/ci";

type props = {
    running: boolean;
    toggleRun: () => void;
    clear: () => void;
    random: () => void;
}

export default function Controls({ running, toggleRun, clear, random }: props) {
    return (
        <>
        <div className="controls-wrapper">
            <div className="controls">
            <button onClick={random}> <GiPerspectiveDiceSixFacesRandom/> Random </button>            
            <button onClick={clear}><CiTrash/>Clear</button>
            <button onClick={ toggleRun} className="primary">
              {running ? <FaPauseCircle/> : <FaPlay/> }  
              {running ? "Pause" : "Continue"}
            </button>
            </div>
        </div>
        <style>{`
        .controls-wrapper {
        margin-bottom: 20px}
        
        .controls{
        display:flex;
        justify-content:center;
        gap: 12px;
        }
        button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 7px;
        font-size:12px;
        border-radius:8px;
        cursor:pointer;
        transition: all 0.1s ease
        }

        button:hover{
        background:#f5f5f5
        transform: translateY(-1px);}
        `}</style>
    </>
    );
}