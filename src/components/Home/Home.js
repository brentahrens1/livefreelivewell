import React from 'react'
import '../../sass/_home.scss'

import kettleBellClub from '../../assets/images/rodney-kettlebells.jpg'

import { programs } from '../../const/programs'
 
const Home = () => {
    return (
        <div className="home">
            <div className="home__card">
                <div className="home__card-message-inner">
                    <div className="home__card-left">
                        <div className="home__card-image">
                            <img src={kettleBellClub} alt="Kettlebell Club" />
                        </div>
                    </div>
                    <div className="home__card-right">
                        <h1>Strength, Mobility and Stability</h1>
                        <ul>
                            <li>Remote / In Person training</li>
                            <li>Coaching</li>
                            <li>Weekly Fitnees Programs</li>
                            <li>Lifestyle Change</li>
                        </ul>
                        <button>Philosophy</button>
                    </div>
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
        </div>
    )
}

export default Home