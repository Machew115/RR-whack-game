import { useState } from 'react'
import Mole from './mole'
import EmptySlot from './emptyHole'

function MoleContainer(props) {
    let [theMole, moleState] = useState(false)
    const handleClick = (e) => {
        props.setScore(props.score + 1)
        moleState(false)
    }

    let littleMole = theMole ? <Mole setScore={props.setScore} toggle={moleState} handleClick={handleClick} /> : <EmptySlot toggle={moleState} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {littleMole}
        </div>
    )
}
export default MoleContainer