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
        <div style={{marginBottom: 20}}>
            <button onClick={ toggleRun}>
              {running ? <FaPauseCircle/> : <FaPlay/> }  
            </button>
            <button onClick={clear}><CiTrash/></button>
            <button onClick={random}> <GiPerspectiveDiceSixFacesRandom/></button>
        </div>
    )
}