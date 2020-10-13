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
                <p>"I've worked with Rodney for nearly 3 years. When I first started focusing on my fitness, I did not know where to begin. My idea of a 'good workout' was 30 minutes on the elliptical. Since then, Rodney has worked with me to improve my range of motion, increase my overall strength and perfect my form. I went from not knowing what a kettlebell was to being able to do 40lbs kettlebell swings, squatting with 30lbs with great form, training for a half marathon and increasing my overall confidence in my body's ability. In all of our sessions, Rodney takes the time to explain the physiology behind each exercise we do, he corrects my form and always has a wonderful attitude."</p>,
                <p>— Rachel</p>
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