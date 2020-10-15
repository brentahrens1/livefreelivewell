import React, { useState, useEffect } from 'react'
import '../../sass/_testimonials.scss'

import { Link } from 'react-router-dom'

const Testimonials = () => {

    return (
        <div className="testimonials">
            <h1><Link to="/testimonials">Read Our Testimonials</Link></h1>
        </div>
    )
}

export default Testimonials