import React, { useEffect } from 'react'
import '../../sass/_programs.scss'
// import PayPalKB from '../PayPal/PayPalKB'

import { Link } from 'react-router-dom'

// import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'

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
                <ul>
                    <li>Learn And Refine Kettlebell-Specific Skills</li>
                    <li>Follow a Structured Progressive Program</li>
                    <li>Learn Injury Prevention Techniques</li>
                    <li>Train With Virtual Community</li>
                    <li>Saturday 9AM PST/12PM EST</li>
                </ul>
                {/* <PayPalKB />
                <ProgramCalculator /> */}
            </div>
        </div>
    )
}

export default KettlebellClub