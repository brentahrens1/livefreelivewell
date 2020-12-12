import React from 'react'
import '../../sass/_programs.scss'

import { Link } from 'react-router-dom'

import picOne from '../../assets/images/programs/remote-coaching.png'

import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'

const Coaching = () => {
    return (
        <div className="program">
            <div className="program__gallery">
                <div className="program__gallery-image one">
                    <img src={picOne} alt="LIVEFREELIVEWELL | Remote Coaching"/>
                </div>
                {/* <div className="program__gallery-image two">
                    <img src={picTwo} alt="LIVEFREELIVEWELL | REMOTE COACHING 2"/>
                </div>
                <div className="program__gallery-image three">
                    <img src={picThree} alt="LIVEFREELIVEWELL | REMOTE COACHING 3" />
                </div> */}
            </div>
            <div className="program__info">
                <h1>ADULT FITNESS PROGRAM</h1>

                <p>Take Charge of YOUR Fitness Journey</p>
                <p>This new year, build long lasting habits & consistency in your fitness routine with a 12-week program.</p>
                <ul>
                    <li>Personalized program</li>
                    <li>Train on your own time anywhere via training app</li>
                    <li>Video reference for each movement</li>
                    <li>Weekly one on one training via zoom</li>
                    <li>FREE access to Live Workout + Q&A (virtual group)</li>
                    <li>Monthly progress tracking via app</li>
                </ul>
                <p>Program starts: Monday, January 4thSign Up Monthly - $110/month or Reserve all 12 weeks - $330</p>
                <p>Schedule a Strategy Session through December to get started.</p>
                <button><a href="https://calendly.com/livefreelivewell/strategy-session" target="_blank">Sign Up</a></button>
            </div>
        </div>
    )
}

export default Coaching