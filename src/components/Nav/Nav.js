import React from 'react'
import '../../sass/_nav.scss'

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <h1>Logo</h1>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><a href="#">Programs</a>
                    <ul className="nav__dropdown dropdown-spot">
                        <li className="nav__dropdown-link"><a href="#">Kettlebell Club</a></li>
                        <li className="nav__dropdown-link"><a href="#">Personal Training</a></li>
                        <li className="nav__dropdown-link"><a href="#">Coaching</a></li>
                    </ul>
                </li>
                <li className="nav__list-item"><a href="#">About</a></li>
                <li className="nav__list-item"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav