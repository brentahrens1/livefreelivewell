import React from 'react'
import '../../sass/_home.scss'

import Testimonials from '../Testimonials/Testimonials'

import { programs } from '../../const/programs'
 
const Home = () => {
    return (
        <div className="home">
            <div className="home__card">
                <div className="home__card-cta">
                    <h2>Strength & Mobility</h2>
                    <p>Regardless of your fitness level or experience, all are welcome. It’s about the individual’s journey, so you only have to live up to your own standards.</p>
                    <button>Begin your journey</button>
                </div>
            </div>
            {
                programs.map((program, idx) =>
                    <div className="home__programs">
                        <h1>{program.title}</h1>
                        <div className="home__programs-image">
                            <img src={program.img} alt={program.title} />
                        </div>
                        <div className="home__programs-content">
                            <p>{program.description}</p>
                            <button>{program.buttonTxt}</button>
                        </div>
                    </div>
                )
            }
            <Testimonials />
        </div>
    )
}

export default Home