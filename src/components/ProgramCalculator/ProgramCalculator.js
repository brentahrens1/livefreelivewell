import React, { useState } from 'react'
import '../../sass/_program-calculator.scss'

const ProgramCalculator = () => {
    const [ mainClick, setMainClick ] = useState(false)
    const [ total, setTotal ] = useState(0)
    const [ remoteTotal, setRemoteTotal ] = useState(0)
    const [ virtualTotal, setVirtualTotal ] = useState(0)
    const [ kbClicked, kbSetClicked ] = useState(true)
    const [ remoteClicked, setRemoteClicked ] = useState(true)
    const [ virtualClicked, setVirtualClicked ] = useState(false)

    const kbClub = (e) => {
        kbSetClicked(!kbClicked)
        if (total <= 0) {
            setTotal(0)
        }
        kbClicked && e.target.id === "kettlebell" ? setTotal(total + 20) : setTotal(total - 20)
    }

    return (
        <div className="program-calculator">
            <h2 onClick={() => setMainClick(!mainClick)} className={`title ${mainClick ? "active" : ''}`}>Program Calculator</h2>
            <div className={`${mainClick ? "calc-container-visible" : "calc-container-hidden"}`}>
                <p>All prices listed below are on a monthly basis</p>
                <p>Let's do the math!</p>
                <div className="program-calculator__btns">
                    <h2>Remote Training</h2>
                    <p>Days a week per month</p>
                    <div className="days">
                        <button id="remote-1" className={`${remoteTotal === 50 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-1' ? setRemoteTotal(50) : setRemoteTotal(remoteTotal - 50)
                        }}>1</button>
                        <button id="remote-2" className={`${remoteTotal === 100 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-2' ? setRemoteTotal(100) : setRemoteTotal(remoteTotal - 100)
                        }}>2</button>
                        <button id="remote-3" className={`${remoteTotal === 150 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-3' ? setRemoteTotal(150) : setRemoteTotal(remoteTotal - 150)
                        }}>3</button>
                        <button id="remote-4" className={`${remoteTotal === 200 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-4' ? setRemoteTotal(200) : setRemoteTotal(remoteTotal - 200)
                        }}>4</button>
                        <button id="remote-5" className={`${remoteTotal === 250 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-5' ? setRemoteTotal(250) : setRemoteTotal(remoteTotal - 250)
                        }}>5</button>
                        <button id="remote-6" className={`${remoteTotal === 300 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-6' ? setRemoteTotal(300) : setRemoteTotal(remoteTotal - 300)
                        }}>6</button>
                        <button id="remote-7" className={`${remoteTotal === 350 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'remote-7' ? setRemoteTotal(350) : setRemoteTotal(remoteTotal - 350)
                        }}>7</button>
                        <button className="reset" onClick={() => setRemoteTotal(0)}>Reset</button>
                    </div>
                    <button id="kettlebell" className={`${kbClicked ? '' : 'active'}`} onClick={kbClub}>Kettlebell Club</button>
                    <p>Kettlebell Club is once a week</p>
                    <h2>Virtual Training</h2>
                    <p>Days a week per month</p>
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
                        <button id="virtual-5" className={`${virtualTotal === 300 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'virtual-5' ? setVirtualTotal(300) : setVirtualTotal(virtualTotal - 300)
                        }}>5</button>
                        <button id="virtual-6" className={`${virtualTotal === 360 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'virtual-6' ? setVirtualTotal(360) : setVirtualTotal(virtualTotal - 360)
                        }}>6</button>
                        <button id="virtual-7" className={`${virtualTotal === 420 ? 'active' : ''}`} onClick={e => {
                            e.target.id === 'virtual-7' ? setVirtualTotal(420) : setVirtualTotal(virtualTotal - 420)
                        }}>7</button>
                        <button className="reset" onClick={() => setVirtualTotal(0)}>Reset</button>
                    </div>
                    <h1>${total + virtualTotal + remoteTotal}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProgramCalculator