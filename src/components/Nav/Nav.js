import React, { useState } from 'react'
import '../../sass/_nav.scss'

import { Link } from 'react-router-dom'

import navLogo from '../../assets/images/logos/transparent.PNG'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ dropdownOpen, setDropdownOpen ] = useState(false)

    return (
        <div className="nav">
            <div className="nav__logo">
                <Link to="/"><img src={navLogo} alt="LIVEFREELIVEWELL | LOGO" /></Link>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><a href="#">Programs</a>
                    <ul className="nav__dropdown">
                        <li className="nav__dropdown-link"><Link to="coaching">Remote Coaching</Link></li>
                        <li className="nav__dropdown-link"><Link to="/kettlebell-club">Kettlebell Club</Link></li>
                        <li className="nav__dropdown-link"><Link to="training">Personal Training</Link></li>
                    </ul>
                </li>
                <li className="nav__list-item"><Link to="/about">About</Link></li>
                <li className="nav__list-item"><Link to="/contact">Contact</Link></li>
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
                    <li className="overlay__list-item" onClick={() => setDropdownOpen(!dropdownOpen)}><a href="#">Programs</a>
                        <div className={`chevron ${dropdownOpen ? "chevron-show" : "hide"}`}>
                            <span className="chevron__bar"></span>
                            <span className="chevron__bar"></span>
                        </div>
                        <ul className={`overlay__dropdown ${ dropdownOpen ? "show" : "hide" }`}>
                            <li className="overlay__dropdown-link" onClick={() => setIsOpen(false)}><Link to="/coaching">Remote Coaching</Link></li>
                            <li className="overlay__dropdown-link" onClick={() => setIsOpen(false)}><Link to="/kettlebell-club">Kettlebell Club</Link></li>
                            <li className="overlay__dropdown-link" onClick={() => setIsOpen(false)}><Link to="/training">Personal Training</Link></li>
                        </ul>
                    </li>
                    <li className="overlay__list-item" onClick={() => setIsOpen(false)}><Link to="/about">About</Link></li>
                    <li className="overlay__list-item" onClick={() => setIsOpen(false)}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav