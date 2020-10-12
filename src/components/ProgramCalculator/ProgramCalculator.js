import React, { useState } from 'react'
import '../../sass/_program-calculator.scss'

const ProgramCalculator = () => {
    const [ total, setTotal ] = useState(0)
    const [ kbClicked, kbSetClicked ] = useState(true)
    const [ coachClicked, coachSetClicked ] = useState(true)
    const [ trainClicked, trainSetClicked ] = useState(true)

    const kbClub = () => {
        kbSetClicked(!kbClicked)
        if (total <= 0) {
            setTotal(0)
        }
        kbClicked ? setTotal(total + 20) : setTotal(total - 20)
        console.log('hit')
    }

    const coaching = () => {
        coachSetClicked(!coachClicked)
        if (total <= 0) {
            setTotal(0)
        }
        coachClicked ? setTotal(total + 50) : setTotal(total - 50)
    }

    const training = () => {
        trainSetClicked(!trainClicked)
        if (total <= 0) {
            setTotal(0)
        }
        trainClicked ? setTotal(total + 80) : setTotal(total - 80)
    }

    return (
        <div className="program-calculator">
            <h1>Let's do the math!</h1>
            <div className="program-calculator__btns">
                <button className={`${kbClicked ? '' : 'active'}`} onClick={kbClub}>Kettlebell Club</button>
                <button className={`${coachClicked ? '' : 'active'}`} onClick={coaching}>Coaching</button>
                <button className={`${trainClicked ? '' : 'active'}`} onClick={training}>Training</button>
                <h1>${total}</h1>
            </div>
        </div>
    )
}

export default ProgramCalculator