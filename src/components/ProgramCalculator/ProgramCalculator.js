import React, { useState } from 'react'
import '../../sass/_program-calculator.scss'

const ProgramCalculator = () => {
    const [ total, setTotal ] = useState(0)
    const [ kbClicked, kbSetClicked ] = useState(true)
    const [ remoteClicked, remoteSetClicked ] = useState(true)
    const [ virtualClicked, virtualSetClicked ] = useState(true)

    const kbClub = () => {
        kbSetClicked(!kbClicked)
        if (total <= 0) {
            setTotal(0)
        }
        kbClicked ? setTotal(total + 20) : setTotal(total - 20)
        console.log('hit')
    }

    const remote = () => {
        remoteSetClicked(!remoteClicked)
        if (total <= 0) {
            setTotal(0)
        }
        remoteClicked ? setTotal(total + 50) : setTotal(total - 50)
    }

    const virtual = () => {
        virtualSetClicked(!virtualClicked)
        if (total <= 0) {
            setTotal(0)
        }
        virtualClicked ? setTotal(total + 60) : setTotal(total - 60)
    }

    return (
        <div className="program-calculator">
            <h1>Program Calculator</h1>
            <p>All prices listed below are on a monthly basis</p>
            <h3>Let's do the math!</h3>
            <div className="program-calculator__btns">
                <button className={`${remoteClicked ? '' : 'active'}`} onClick={remote}>Remote Training</button>
                <button className={`${kbClicked ? '' : 'active'}`} onClick={kbClub}>Kettlebell Club</button>
                <button className={`${virtualClicked ? '' : 'active'}`} onClick={virtual}>Virtual Training</button>
                <h1>${total}</h1>
            </div>
        </div>
    )
}

export default ProgramCalculator