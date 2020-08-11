import React, { useState } from 'react'
import '../../sass/_nav.scss'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <div className="nav">
            <div className="nav__logo">
                <h1>Logo</h1>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><a href="#">Programs</a>
                    <ul className="nav__dropdown">
                        <li className="nav__dropdown-link"><a href="#">Kettlebell Club</a></li>
                        <li className="nav__dropdown-link"><a href="#">Personal Training</a></li>
                        <li className="nav__dropdown-link"><a href="#">Coaching</a></li>
                    </ul>
                </li>
                <li className="nav__list-item"><a href="#">About</a></li>
                <li className="nav__list-item"><a href="#">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
            <div className={`overlay ${isOpen ? "open" : "hide"}`}>
                <div className="overlay__close">
                    <div className="overlay__close-icon" onClick={() => setIsOpen(!isOpen)}>
                        <div className="overlay__close-bar" />
                        <div className="overlay__close-bar" />
                    </div>
                </div>
                <ul className="overlay__list">
                    <li className="overlay__list-item"><a href="#">Programs</a>
                        <ul className="overlay__dropdown">
                            <li className="overlay__dropdown-link"><a href="#">Kettlebell Club</a></li>
                            <li className="overlay__dropdown-link"><a href="#">Personal Training</a></li>
                            <li className="overlay__dropdown-link"><a href="#">Coaching</a></li>
                        </ul>
                    </li>
                    <li className="overlay__list-item"><a href="#">About</a></li>
                    <li className="overlay__list-item"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav