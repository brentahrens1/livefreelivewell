import React, { useState } from 'react'
import '../../sass/_program-calculator.scss'

const ProgramCalculator = () => {
    const [ mainClick, setMainClick ] = useState(false)
    const [ total, setTotal ] = useState(0)
    const [ kbClicked, kbSetClicked ] = useState(true)
    const [ remoteClicked, setRemoteClicked ] = useState(true)
    const [ background, setBackground ] = useState('')

    const kbClub = () => {
        kbSetClicked(!kbClicked)
        if (total <= 0) {
            setTotal(0)
        }
        kbClicked ? setTotal(total + 20) : setTotal(total - 20)
    }

    const remote = (e) => {
        setRemoteClicked(!remoteClicked)
        remoteClicked && e.target.id == 2 ? setTotal(total + 100) : setTotal(total - 100) 
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
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 50) : setTotal(0)
                        }}>1</button>
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 100) : setTotal(0)
                        }}>2</button>
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 150) : setTotal(0)
                        }}>3</button>
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 200) : setTotal(0)
                        }}>4</button>
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 250) : setTotal(0)
                        }}>5</button>
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 300) : setTotal(0)
                        }}>6</button>
                        <button id="remote" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'remote' ? setTotal(total + 350) : setTotal(0)
                        }}>7</button>
                    </div>
                    <button className={`${kbClicked ? 'active' : ''}`} onClick={kbClub}>Kettlebell Club</button>
                    <h2>Virtual Training</h2>
                    <p>Days a week per month</p>
                    <div className="days">
                    <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 60) : setTotal(0)
                        }}>1</button>
                        <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 120) : setTotal(0)
                        }}>2</button>
                        <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 180) : setTotal(0)
                        }}>3</button>
                        <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 240) : setTotal(0)
                        }}>4</button>
                        <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 300) : setTotal(0)
                        }}>5</button>
                        <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 360) : setTotal(0)
                        }}>6</button>
                        <button id="virtual" onClick={e => {
                            setRemoteClicked(!remoteClicked)
                            remoteClicked && e.target.id === 'virtual' ? setTotal(total + 420) : setTotal(0)
                        }}>7</button>
                    </div>
                    <h1>${total}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProgramCalculator