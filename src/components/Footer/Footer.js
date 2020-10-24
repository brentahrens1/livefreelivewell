import React from 'react'
import '../../sass/_footer.scss'

import footLogo from '../../assets/images/logos/white-blue.JPG'

import Testimonials from '../Testimonials/Testimonials'

import instagram from '../../assets/images/socials/instagram.png'
import twiiter from '../../assets/images/socials/twitter.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__inner">
                <div className="footer-left">
                    <div className="footer__logo">
                        <img src={footLogo} alt="livefreelivewell" />
                    </div>
                    <h1>#livefreelivewell</h1>
                </div>
                <div className="footer__social">
                    <ul>
                        <li><Testimonials /></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="media-box">
                    <div className="icons">
                        <div className="icons__image">
                            <a href="https://www.instagram.com/livefreelivewell/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="LIVEFREELIVEWELL | Instagram" /></a>
                        </div>
                        <div className="icons__image">
                            <a href="https://twitter.com/infotolive" target="_blank" rel="noopener noreferrer"><img src={twiiter} alt="LIVEFREELIVEWELL | Twitter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer