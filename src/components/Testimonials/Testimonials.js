import React from 'react'
import '../../sass/_testimonials.scss'

import { Link } from 'react-router-dom'

const Testimonials = () => {

    return (
        <div className="testimonials">
            <Link to="/testimonials">Client Stories</Link>
        </div>
    )
}

export default Testimonials