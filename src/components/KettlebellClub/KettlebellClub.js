import React from 'react'
import '../../sass/_programs.scss'

import { Link } from 'react-router-dom'

import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'

import picOne from '../../assets/images/programs/kettlebelll-club-min.png'

const KettlebellClub = () => {
    return (
        <div className="program">
            <div className="program__gallery">
                <div className="program__gallery-image one">
                    <img src={picOne} alt="LIVEFREELIVEWELL | Kettlebell Club" />
                </div>
                {/* <div className="program__gallery-image two">
                    <img src={picTwo} />
                </div>
                <div className="program__gallery-image three">
                    <img src={picThree} />
                </div> */}
            </div>
            <div className="program__info">
                <h1>Kettlebell Club</h1>

                <h1>$20/mo</h1>
                <ul>
                    <li>Learn And Refine Kettlebell-Specific Skills</li>
                    <li>Structured Approach To Prevent Risk Of Injury</li>
                    <li>Train With Virtual Community</li>
                    <li>Program Tracking: Metrics & Pictures</li>
                    <li>Saturday 9am PST & 10:30am PT</li>
                    <li>Free Access To Live Workout and Q&A</li>
                </ul>
                <button><Link to="contact">Join The Club</Link></button>
                <ProgramCalculator />
            </div>
        </div>
    )
}

export default KettlebellClub