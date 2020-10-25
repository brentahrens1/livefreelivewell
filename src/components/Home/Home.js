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
                    <h1>Start your<br /> fitness journey</h1>
                    <p>Begin With a FREE 2-Week Trial</p>
                    <button><Link to="/about">Learn More</Link></button>
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
                        <li>Train Anywhere, Anytime</li>
                        <li>Video Reference for Each Movement</li>
                        <li>Progress Tracking: Metrics & Pictures</li>
                        <li>Program Based on Available Equipment</li>
                        <li>Personalized Feedback</li>
                    </ul>
                    <h1>$50/MO</h1>
                    </>
                    <button><Link to="/contact">Start Now</Link></button>
                </div>
            </div>
            <div className="home__programs kb">
                <div className="home__programs-content">
                    <h1>Kettlebell Club:</h1>
                    <>
                    <ul>
                        <li>Learn & Refine Kettlebell-Specific Skills</li>
                        <li>Structured Approach To Prevent Risk of Injury</li>
                        <li>Train With Virtual Community</li>
                        <li>Program Tracking: Metrics & Pictures</li>
                        <li>Saturdays 9AM PST & 10:30AM PST</li>
                    </ul>
                    <h1>$20/MO</h1>
                    </>
                    <button className="kb-btn"><Link to="/contact">Join The Club</Link></button>
                </div>
                <div className="home__programs-image">
                    <img src={kettlbells} alt="Kettlebell Club" />
                </div>
            </div>
            <div className="home__programs pt">
                <div className="home__programs-image">
                    <img src={training} alt="Personal Training (In-Person or Virtual)" />
                </div>
                <div className="home__programs-content">
                    <h1>Personal Training (Virtual/In-Person):</h1>
                    <>
                    <ul>
                        <li>Program Specific To Your Goals</li>
                        <li>Program Based on Available Equipment (Virtual)</li>
                        <li>Meet At Preferred Location (In-Person)</li>
                        <li>Program Tracking: Metrics & Pictures</li>
                        <li>Live Feedback</li>
                    </ul>
                    <h1>$15/$60 Per Session</h1>
                    </>
                    <button><Link to="/contact">Start Now</Link></button>
                </div>
            </div>
            <div className="home__programs qa">
                <div className="home__programs-content">
                    <h1>Live Workout + Q&A:</h1>
                    <>
                    <ul>
                        <li>Minimal To No Equipment Required</li>
                        <li>Train With Virtual Community</li>
                        <li>Focus on Functional Strength, Stability, & Mobility</li>
                        <li>20 Minute Discussion on General Health, Fitness, Nutrition, & More</li>
                        <li>Wednesdays 5PM PST</li>
                    </ul>
                    <h1>Free Access With Program Purchase</h1>
                    </>
                    <button><Link to="/contact">Start Now</Link></button>
                </div>
                <div className="home__programs-image">
                    <img src={wednesday} alt="Live Workout + Q&A" />
                </div>
            </div>
        </div>
    )
}

export default Home