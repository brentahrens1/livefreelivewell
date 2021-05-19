import React from 'react'
import '../../sass/_programs.scss'
import picOne from '../../assets/images/programs/remote-coaching.png'
import ProgramCalculator from '../ProgramCalculator/ProgramCalculator'
import PayPalRemote from '../PayPal/PayPalRemote'

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
                <h1>Remote Coaching</h1>
                <ul>
                    <li>Weekly Virtual Training via Zoom</li>
                    <li>Train Anywhere, Anytime With Training App</li>
                    <li>Program Based on Available Equipment</li>
                    <li>Personalized Feedback</li>
                </ul>
                <PayPalRemote />
                <ProgramCalculator />
            </div>
        </div>
    )
}

export default Coaching