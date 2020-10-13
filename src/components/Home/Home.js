import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import { programs } from '../../const/programs'

import testImg from '../../assets/images/programs/coaching-min.png'
 
const Home = () => {
    return (
        <div className="home">
            <div className="home__card">
                <div className="home__card-cta">
                    <h2>Start your journey</h2>
                    <p>Pick an available time and date to set up your first strategy session with Rodney. Take a look through our programs.</p>
                    <button><Link to="/contact">Schedule Session</Link></button>
                </div>
            </div>
            {
                programs.map((program, idx) =>
                    <Link to={program.path}>
                        <div className="home__programs">
                            <div className="home__programs-image">
                                <img src={program.img} alt={program.title} />
                            </div>
                            <div className="home__programs-content">
                                <h1>{program.title}</h1>
                                <p>{program.description}</p>
                                <button>{program.buttonTxt}</button>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default Home