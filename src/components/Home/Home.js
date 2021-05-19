import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import kettlbells from '../../assets/images/programs/kettlebelll-club-min.png'
import coaching from '../../assets/images/programs/remote-coaching.png'
import training from '../../assets/images/programs/training-min.png'
import wednesday from '../../assets/images/programs/q&a.png'

 
const Home = () => {

    return (
        <div className="home">
            <div className="home__card">
                <div className="home__card-cta">
                    <h1>Live your Fitness Journey</h1>
                    <p>Start With Strategy Session</p>
                    <button><Link to="/about">Learn More</Link></button>
                </div>
            </div>
            <div className="home__programs pt">
                <div className="home__programs-image">
                    <img src={training} alt="Personal Training (In-Person or Virtual)" />
                </div>
                <div className="home__programs-content">
                    <h1>Personalized Coaching</h1>
                    <>
                    <h3>Personal Training</h3>
                    <ul>
                        <li>One-on-one coaching</li>
                    </ul>
                    <h3>Semi-Private Training</h3>
                    <ul>
                        <li>Up to 2 participants</li>
                    </ul>
                    <h3>Small Group Training</h3>
                    <ul>
                        <li>Up to 8 participants</li>
                    </ul>
                    </>
                    <button><Link to="/contact">Learn More</Link></button>
                </div>
            </div>
            <div className="home__programs">
                <div className="home__programs-image">
                    <img src={coaching} alt="Remote Coaching" />
                </div>
                <div className="home__programs-content rm">
                    <h1>Remote Coaching:</h1>
                    <>
                    <ul>
                        <li>Virtual Training via Zoom</li>
                        <li>Train Anywhere, Anytime With Training App</li>
                    </ul>
                    </>
                    <button><Link to="/contact">Register Here</Link></button>
                </div>
            </div>
            <div className="home__programs kb">
                <div className="home__programs-content">
                    <h1>Kettlebell Club:</h1>
                    <>
                    <ul>
                        <li>Learn & Refine Kettlebell-Specific Skills</li>
                        <li>Train Weekly With Virtual Community</li>
                    </ul>
                    </>
                    <button className="kb-btn"><Link to="/contact">Join The Club</Link></button>
                </div>
                <div className="home__programs-image">
                    <img src={kettlbells} alt="Kettlebell Club" />
                </div>
            </div>
            <div className="home__programs qa">
                <div className="home__programs-content">
                    <h1>Live Workout + Q&A:</h1>
                    <>
                    <ul>
                        <li>Minimal To No Equipment Required</li>
                        <li>45 minute Training + 20 minute Discussion on General Fitness, Nutrition & More</li>
                    </ul>
                    </>
                    <button><a href="https://calendly.com/livefreelivewell/live-workout-q-a" target="_blank">Register Here</a></button>
                </div>
                <div className="home__programs-image">
                    <img src={wednesday} alt="Live Workout + Q&A" />
                </div>
            </div>
        </div>
    )
}

export default Home