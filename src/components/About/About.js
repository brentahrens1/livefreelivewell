import React from 'react'
import '../../sass/_about.scss'

import RodneyProfile from '../../assets/images/about/Profile Pic-min.jpg'
import aboutOne from '../../assets/images/about/about1-min.png'
import aboutTwo from '../../assets/images/about/about2-min.png'

const About = () => {
    return (
        <div className="about">
            <div className="about__intro">
                <div className="about__intro-text">
                    <h1>About Me</h1>
                    <p className="about-first-p">In the last decade, I have worked in a variety of roles within the fitness industry., from personal trainer to fitness manager, leading my team to success. No matter the position, I never forget the focus on the client and their goals, whether it be weight loss, injury prevention or athletic development. I have dedicated myself to understanding my clients, their health, and their fitness goals. I believe in creating a solid foundation based on a continuous approach to long term health.</p>
                    <h1>Why LIVEFREELIVEWELL?</h1>
                    <p>The pandemic redefined how we focus on fitness. We were challenged to find alternate, effective options to reach our goals. At home training is more important now than ever. The need for an accessible training experience including self paced programs, individual and community challenges and a guided mastery of long term success propelled me to create a unique fitness experience with both virtual and in person programs based on your needs.</p>
                </div>
                <div className="about__intro-image">
                    <img src={RodneyProfile} alt="Rodney Lozier" />
                </div>
            </div>
            <div className="about__philosophy">
                <h1>Getting Started</h1>
                <div className="about__philosophy-body">
                    <p className="get-started">When you register for the Strategy Session, you are automatically eligible for the FREE 2 week self paced program through the TrueCoach App, as well as the Wednesday virtual Live Workout + Q & A. You will get an exclusive preview of the programs prior to deciding which best fits your goals. During the Strategy Session we will go over your short term and long term goals. Assess your movement patterns and go over the operational details necessary to effectively begin your journey.</p>
                </div>
            </div>
            <div className="about__background">
                <div className="about__background-body">
                    <div className="about__background-image">
                        <img src={aboutOne} />
                    </div>
                    <div className="about__background-blurb">
                        <h1>During The Strategy Session</h1>
                        <ul>
                            <li>Examine Short Term/Long Term Goals</li>
                            <li>Assess Movement Patterns</li>
                            <li>Formulate A Plan For Your Fitness Journey</li>
                        </ul>
                    </div>
                    <div className="about__background-blurb">
                        <h1>When You Register For The Strategy Session</h1>
                        <ul>
                            <li>FREE 2 week Trial </li>
                            <li>Self-Paced Program With Metrics Tracking Analytics</li>
                            <li>One Virtual Personal Training Session</li>
                            <li>Access To Virtual Live Workout + Q&A on Wednesdays</li>
                            <li>Exclusive Preview Of Programs To Help You decide best fit</li>
                        </ul>
                    </div>
                    <div className="about__background-image image-two">
                        <img src={aboutTwo} />
                    </div>
                </div>
            </div>
            <div className="about__certifications">
                <h1>Specializations</h1>
                <div className="about__certifications__body">
                    <ul>
                        <li>Certified Functional Strength Coach</li>
                        <li>Kettlebell Instructor, Olympic</li>
                    </ul>
                    <ul>
                        <li>Weightlifting, Weight Loss Specialist</li>
                        <li>Injury Prevention, Strength Training</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About