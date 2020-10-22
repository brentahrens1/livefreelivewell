import React from 'react'

import kettlbells from '../assets/images/programs/kettlebelll-club-min.png'
import coaching from '../assets/images/programs/remote-coaching.png'
import training from '../assets/images/programs/training-min.png'
import wednesday from '../assets/images/programs/q&a.png'

export const programs = [
    {
        title: "Remote Coaching",
        img: coaching,
        description: <>
            <ul>
                <li>Train Anytime Anywhere</li>
                <li>Video Reference for Each Movement</li>
                <li>Progress Tracking: Metrics & Pictures</li>
                <li>Program Based On Available Equipment</li>
                <li>Personalized Feedback</li>
                <h4>$50 / MO</h4>
            </ul>
        </>,
        link: '',
        buttonTxt: 'Start Now',
        path: 'coaching'
    },
    {
        title: "Kettlebell Club",
        img: kettlbells,
        description:  <>
                    <ul>
                        <li>Learn And Refine Kettlebell-Specific Skills</li>
                        <li>Structured Approach To Prevent Risk Of Injury</li>
                        <li>Train With Virtual Community</li>
                        <li>Program Tracking: Metrics & Pictures</li>
                        <li>Saturday 9am PST & 10:30am PT</li>
                        <h4>$20 / MO</h4>
                    </ul>
                </>,
        link: '',
        buttonTxt: 'Join the club',
        path: 'kettlebell-club'
    },
    {
        title: "Personal Training (In-Person or Virtual)",
        img: training,
        description: <>
                    <ul>
                        <li>Program Specific To Your Goals</li>
                        <li>Program Based On Available Equipment (virtual)</li>
                        <li>Meet At Preferred Location (in-person)</li>
                        <li>Program Tracking: Metrics & Pictures</li>
                        <li>Live Feedback</li>
                        <h4>$15 per session | Virtual</h4>
                        <h4>$60 per session | In-Person</h4>
                    </ul>
                </>,
        link: '',
        buttonTxt: 'Start Now',
        path: 'training'
    },
    {
        title: "Live Workout + Q&A",
        img: wednesday,
        description: <>
                    <ul>
                        <li>Minimal To No Equiptment Required</li>
                        <li>Train With Virtual Community</li>
                        <li>Focus On Fucntional Strength, Stability, and Mobility</li>
                        <li>20 Minute Discussion On General Health, Fitness, Nutrition Habits & Much More</li>
                        <li>Wednesday 5PM-PT</li>
                        <h4>Free Access with purchase of any of the programs.</h4>
                    </ul>
                </>,
        link: '',
        buttonTxt: 'Start Now',
        path: 'training'
    },
]