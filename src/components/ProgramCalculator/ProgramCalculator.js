import React, { useState } from 'react'
import '../../sass/_program-calculator.scss'

const ProgramCalculator = () => {
    const [ mainClick, setMainClick ] = useState(false)
    const [ total, setTotal ] = useState(0)
    const [ kbClicked, kbSetClicked ] = useState(false)
    const [ remoteTotal, setRemoteTotal ] = useState(0)
    const [ remoteClicked, setRemoteClicked ] = useState(false)
    const [ virtualTotal, setVirtualTotal ] = useState(0)
    const [ virtualClicked, setVirtualClicked ] = useState(false)
    const [ inPersonTotal, setInPersonTotal ] = useState(0)
    const [ inPersonClicked, setInPersonClicked] = useState(false)

    const kbClub = (e) => {
        kbSetClicked(!kbClicked)
        kbClicked && e.target.id === "kettlebell" ? setTotal(total - 20) : setTotal(total + 20)
    }

    const remote = (e) => {
        setRemoteClicked(!remoteClicked)
        remoteClicked && e.target.id === "remote" ? setTotal(total - 50) : setTotal(total + 50)
    }

    return (
        <div className="program-calculator">
            <h2 onClick={() => setMainClick(!mainClick)} className={`title ${mainClick ? "active" : ''}`}>Program Calculator</h2>
            <div className={`${mainClick ? "calc-container-visible" : "calc-container-hidden"}`}>
                <p>All prices listed below are on a monthly basis</p>
                <p>Let's do the math!</p>
                <div className="program-calculator__btns">
                    <button id="remote" className={`${remoteClicked ? 'active' : ''}`} onClick={remote}>Remote Coaching</button>
                    <div className={`${remoteClicked ? "remote-section-visible" : "remote-section-hidden"}`}>
                        <p>Train on your on your own time using App.</p>
                    </div>
                    <button id="kettlebell" className={`${kbClicked ? 'active' : ''}`} onClick={kbClub}>Kettlebell Club</button>
                    <div className={`${kbClicked ? "kettlebell-section-visible" : "kettlebell-section-hidden"}`}>
                        <p>Learn And Refine Kettlebell-Specific Skills.</p>
                    </div>
                    <button id="virtual-training" className={`${virtualClicked ? 'active' : ''}`} onClick={() => setVirtualClicked(!virtualClicked)}>Virtual Training</button>
                    <div className={`${virtualClicked ? "virtual-section-visible" : "virtual-section-hidden"}`}>
                        <p>Live coaching through Zoom.</p>
                        <h5>Days per week</h5>
                        <div className="days">
                        <button id="virtual-1" className={`${virtualTotal === 60 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-1' ? setVirtualTotal(60) : setVirtualTotal(virtualTotal - 60)
                            }}>1</button>
                            <button id="virtual-2" className={`${virtualTotal === 120 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-2' ? setVirtualTotal(120) : setVirtualTotal(virtualTotal - 120)
                            }}>2</button>
                            <button id="virtual-3" className={`${virtualTotal === 180 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-3' ? setVirtualTotal(180) : setVirtualTotal(virtualTotal - 180)
                            }}>3</button>
                            <button id="virtual-4" className={`${virtualTotal === 240 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-4' ? setVirtualTotal(240) : setVirtualTotal(virtualTotal - 240)
                            }}>4</button>
                            {/* <button id="virtual-5" className={`${virtualTotal === 300 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-5' ? setVirtualTotal(300) : setVirtualTotal(virtualTotal - 300)
                            }}>5</button>
                            <button id="virtual-6" className={`${virtualTotal === 360 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-6' ? setVirtualTotal(360) : setVirtualTotal(virtualTotal - 360)
                            }}>6</button>
                            <button id="virtual-7" className={`${virtualTotal === 420 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'virtual-7' ? setVirtualTotal(420) : setVirtualTotal(virtualTotal - 420)
                            }}>7</button> */}
                            <button className="reset" onClick={() => setVirtualTotal(0)}>Reset</button>
                        </div>
                    </div>
                    <button id="in-person-training" className={`${inPersonClicked ? 'active' : ''}`} onClick={() =>  setInPersonClicked(!inPersonClicked)}>In-Person Training</button>
                    <div className={`${inPersonClicked ? "in-person-section-visible" : "in-person-section-hidden"}`}>
                        <p>Meet one on one at preferred location.</p>
                        <h5>Days per week</h5>
                        <div className="days">
                            <button id="in-person-1" className={`${inPersonTotal === 240 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person-1' ? setInPersonTotal(240) : setInPersonTotal(inPersonTotal - 240)
                            }}>1</button>
                            <button id="in-person-2" className={`${inPersonTotal === 480 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person-2' ? setInPersonTotal(480) : setInPersonTotal(inPersonTotal - 480)
                            }}>2</button>
                            <button id="in-person-3" className={`${inPersonTotal === 720 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person-3' ? setInPersonTotal(720) : setInPersonTotal(inPersonTotal - 720)
                            }}>3</button>
                            <button id="in-person-4" className={`${inPersonTotal === 960 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person-4' ? setInPersonTotal(960) : setInPersonTotal(inPersonTotal - 960)
                            }}>4</button>
                            {/* <button id="in-person-5" className={`${inPersonTotal === 250 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person-5' ? setInPersonTotal(250) : setInPersonTotal(inPersonTotal - 250)
                            }}>5</button>
                            <button id="in-person" className={`${inPersonTotal === 300 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person' ? setInPersonTotal(300) : setInPersonTotal(inPersonTotal - 300)
                            }}>6</button>
                            <button id="in-person" className={`${inPersonTotal === 350 ? 'active' : ''}`} onClick={e => {
                                e.target.id === 'in-person' ? setInPersonTotal(350) : setInPersonTotal(inPersonTotal - 350)
                            }}>7</button> */}
                            <button className="reset" onClick={() => setInPersonTotal(0)}>Reset</button>
                        </div>
                    </div>
                    <h1>${total + virtualTotal + inPersonTotal + remoteTotal}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProgramCalculator