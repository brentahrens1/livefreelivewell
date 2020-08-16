import React from 'react'
import '../../sass/_programs.scss'

import picOne from '../../assets/images/programs/training.jpg'
import picTwo from '../../assets/images/programs/kettlebell.jpg'
import picThree from '../../assets/images/programs/bench-press-bar.jpg'
import picFour from '../../assets/images/programs/bench-press-bar.jpg'

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
                <div className="program__gallery-image four">
                    <img src={picOne} />
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
                <button>Join The Club</button>
            </div>
        </div>
    )
}

export default Coaching