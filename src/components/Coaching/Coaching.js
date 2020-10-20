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
                    <img src={picOne} alt="LIVEFREELIVEWELL | REMOTE COACHING"/>
                </div>
                {/* <div className="program__gallery-image two">
                    <img src={picTwo} alt="LIVEFREELIVEWELL | REMOTE COACHING 2"/>
                </div>
                <div className="program__gallery-image three">
                    <img src={picThree} alt="LIVEFREELIVEWELL | REMOTE COACHING 3" />
                </div> */}
            </div>
            <div className="program__info">
                <h1>Remote Coaching</h1>

                <h3>$50 / mo</h3>
                <ul>
                    <li>Train Anytime Anywhere</li>
                    <li>Video Reference for Each Movement</li>
                    <li>Progress Tracking: Metrics & Pictures</li>
                    <li>Program Based On Available Equipment</li>
                    <li>Personalized Feedback</li>
                    <li>Free Access To Live Workout and Q&A</li>
                </ul>
                <button><Link to="/contact">Join The Club</Link></button>
                <ProgramCalculator />
            </div>
        </div>
    )
}

export default Coaching