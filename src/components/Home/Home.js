import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import { programs } from '../../const/programs'
 
const Home = () => {

    return (
        <div className="home">
            <div className="home__card">
                <div className="home__card-cta">
                    <h2>Start your fitness journey</h2>
                    <p>Begin with a free 2 week trial</p>
                    <button><Link to="/about">Learn More</Link></button>
                </div>
            </div>
            {
                programs.map((program, idx) =>
                        <div key={idx} className="home__programs">
                            <div className="home__programs-image">
                                <img src={program.img} alt={program.title} />
                            </div>
                            <div className="home__programs-content">
                                <h1>{program.title}</h1>
                                {program.description}
                                <Link to="/contact"><button>{program.buttonTxt}</button></Link>
                            </div>
                        </div>
                )
            }
        </div>
    )
}

export default Home