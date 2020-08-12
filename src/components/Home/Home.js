import React from 'react'
import '../../sass/_home.scss'

import kettleBellClub from '../../assets/images/test.jpg'

import { programs } from '../../const/programs'
 
const Home = () => {
    return (
        <div className="home">
            <div className="home__card">
                <div className="home__card-message-inner">
                    <div className="home__card-message-inner-content">
                        <h1>Let's get shredded!</h1>
                        <h4>Philosophy</h4>
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