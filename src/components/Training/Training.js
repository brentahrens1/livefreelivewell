import React from 'react'
import '../../sass/_programs.scss'

import { Link } from 'react-router-dom'

import picOne from '../../assets/images/programs/training-min.png'

import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'

const Training = () => {
    return (
        <div className="program">
            <div className="program__gallery">
                <div className="program__gallery-image one">
                    <img src={picOne} alt="LIVEFREELIVEWELl | Personal Training" />
                </div>
                {/* <div className="program__gallery-image two">
                    <img src={picTwo} />
                </div>
                <div className="program__gallery-image three">
                    <img src={picThree} />
                </div> */}
            </div>
            <div className="program__info">
                <h1>Personal Training | In Person or Virtual</h1>

                <h3>$60 / mo</h3>
                <ul>
                    <li>Program Specific To Your Goals</li>
                    <li>Program Based On Available Equipment (virtual)</li>
                    <li>Meet At Preferred Location (in-person)</li>
                    <li>Program Tracking: Metrics & Pictures</li>
                    <li>Live Feedback</li>
                    <li>Free Access To Live Workout and Q&A</li>
                </ul>
                <button><Link to="/contact">Join The Club</Link></button>
                <ProgramCalculator />
            </div>
        </div>
    )
}

export default Training