import React from 'react'
import '../../sass/_footer.scss'

import footLogo from '../../assets/images/logos/alt-blue.jpg'

import Testimonials from '../Testimonials/Testimonials'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__right">
                <div className="footer__logo">
                    <img src={footLogo} alt="livefreelivewell" />
                </div>
                <h1>#livefreelivewell</h1>
            </div>
            <Testimonials />
            <div className="footer__social">
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">True Coach</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer