import React, { useState, useEffect } from 'react'
import '../../sass/_testimonials.scss'

import { testimonials } from '../../const/testimonials'

const Testimonials = () => {
    let [ testimonial, setTestimonial ] = useState('')
    let count = 0

    useEffect(() => {
        setInterval(function() {
            count++
            if (count === testimonials.length) {
                count = 0
            }
    
            let idx = testimonials[count]
            setTestimonial(idx)
        }, 7000) 
    }, [])

    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            {
                testimonial === '' ?
                <div className="testimonials__scroll">
                <p>"My Bod is now a fine tuned instrument"</p>,
                <p>— Wyatt</p>
                </div>
                :
                <div className="testimonials__scroll">
                <p>"{ testimonial.body }"</p>
                <p>— { testimonial.name }</p>
                </div>
            }
        </div>
    )
}

export default Testimonials