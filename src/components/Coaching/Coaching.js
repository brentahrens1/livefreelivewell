import React from 'react'
import '../../sass/_programs.scss'

import { Link } from 'react-router-dom'

import picOne from '../../assets/images/programs/coaching-min.png'
import picTwo from '../../assets/images/programs/coach-min.png'
import picThree from '../../assets/images/programs/new-group-train-min.png'

import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'

const Coaching = () => {
    return (
        <div className="program">
            <div className="program__gallery">
                <div className="program__gallery-image one">
                    <img src={picOne} />
                </div>
                <div className="program__gallery-image two">
                    <img src={picTwo} />
                </div>
                <div className="program__gallery-image three">
                    <img src={picThree} />
                </div>
            </div>
            <div className="program__info">
                <h1>Coaching</h1>
                <p>Weekly KB party where each individual is treated with respect and given the opportunity to imporve their life and rise to the occasion and level up.</p>
                <p>Weekly KB party where each individual is treated with respect and given the opportunity to imporve their life and rise to the occasion and level up.</p>
                <p>Weekly KB party where each individual is treated with respect and given the opportunity to imporve their life and rise to.</p>

                <h3>$20 / mo</h3>
                <ul>
                    <li>Weekly 60 minute class</li>
                    <li>Develop professional skills</li>
                    <li>Build muscle and conditioning</li>
                    <li>Be a better person</li>
                </ul>
                <button><Link to="/contact">Join The Club</Link></button>
                <ProgramCalculator />
            </div>
        </div>
    )
}

export default Coaching