import React from 'react'
import '../../sass/_about.scss'

import RodneyProfile from '../../assets/images/rodney-kettlebells.jpg'
import aboutOne from '../../assets/images/about/about1.JPG'
import aboutTwo from '../../assets/images/about/about2.JPG'
import aboutThree from '../../assets/images/about/about3.jpg'


const About = () => {
    return (
        <div className="about">
            <div className="about__intro">
                <div>
                    <h2>The Motto</h2>
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                </div>
                <div className="about__intro-image">
                    <img src={RodneyProfile} alt="Rodney Lozier" />
                </div>
            </div>
            <div className="about__philosophy">
                <h2>Our Philosophy</h2>
                <div className="about__philosophy-body">
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                </div>
            </div>
            <div className="about__background">
                <h2>Background</h2>
                <div className="about__background-body">
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards. Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards. Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards. Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards. Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                </div>
            </div>
            <div className="about__certifications">
                <h2>Certifications</h2>
                <div className="about__certifications__body">
                    <ul>
                        <li>* kettlebells RKC and DKG</li>
                        <li>* Pull up champion of the world</li>
                        <li>* Did a couple sit ups once</li>
                    </ul>
                    <ul>
                        <li>* Ran a mile in middle school</li>
                        <li>* Eat 7 meals a day</li>
                        <li>* kettlebells</li>
                        <li>* Steroids</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About