import React from 'react'
import '../../sass/_about.scss'

import { Link } from 'react-router-dom'

import RodneyProfile from '../../assets/images/about/Profile Pic-min.jpg'
import aboutOne from '../../assets/images/programs/pt.jpg'

const About = () => {
    return (
        <div className="about">
            <div className="about__intro">
                <div className="about__intro-text">
                    <div className="section">
                        <h1>About Me</h1>
                        <p className="about-first-p">In the last decade, I have worked in a variety of roles within the fitness industry, from personal trainer to fitness manager, leading my team to success. No matter the position, I never forget the focus on the client and their goals, whether it be weight loss, injury prevention or athletic development. I have dedicated myself to understanding my clients, their health, and their fitness goals. I believe in creating a solid foundation based on a continuous approach to long term health.</p>
                    </div>
                    <div className="section">
                        <h1>Why LIVEFREELIVEWELL?</h1>
                        <p>The pandemic redefined how we focus on fitness. We were challenged to find alternate, effective options to reach our goals. At home training is more important now than ever. The need for an accessible training experience including self paced programs, individual and community challenges and a guided mastery of long term success propelled me to create a unique fitness experience with both virtual and in person programs based on your needs.</p>
                    </div>
                    <div className="section">
                        <h1>Specializations</h1>
                        <ul>
                            <li>Certified Functional Strength Coach</li>
                            <li>Kettlebell Instructor, Olympic Weightlifting</li>
                            <li>Weight Loss Specialist</li>
                            <li>Injury Prevention, Strength Training</li>
                        </ul>
                    </div>
                </div>
                <div className="about__intro-image">
                    <img src={RodneyProfile} alt="LIVEFREELIVEWELL | Profile Picture" />
                </div>
            </div>
            <div className="about-client-stories">
                <h1><Link to="/client-stories">Client Stories</Link></h1>
            </div>
            <div className="about__background">
                <div className="about__background-body">
                    <div className="about__background-image">
                        <img src={aboutOne} alt="LIVEFREELIVEWELL | Training Session" />
                    </div>
                    <div className="about__background-blurb">
                        <h1>Strategy Session: Meet & Greet via Zoom</h1>
                        <ul>
                            <li>Examine Short Term/Long Term Goals</li>
                            <li>Analyze Habits & Potential Areas of Opportunity</li>
                            <li>Formulate A Plan For Your Fitness Journey</li>
                            <li>Q&A</li>
                        </ul>
                        <h1>When You Register For The Strategy Session</h1>
                        <ul>
                            <li>FREE 2 week Trial </li>
                            <li>Self-Paced Program With Metrics Tracking Analytics</li>
                            <li>One Virtual Personal Training Session</li>
                            <li>Access To Virtual Live Workout + Q&A</li>
                            <li>Exclusive Preview Of Programs To Help You decide Best Fit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About