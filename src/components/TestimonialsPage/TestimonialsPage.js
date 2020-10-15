import React from 'react'
import '../../sass/_testimonials-page.scss'

import { testimonials } from '../../const/testimonials'

const TestimonialsPage = () => {
    return (
        <div className="testimonials-page">
            <h1>Testimonials</h1>
            {
                testimonials.map((testimonial, idx) => 
                    <div className="page">
                        <p>"{testimonial.body}"</p>
                        <h3>- {testimonial.name}</h3>
                        <hr />
                    </div>
                )
            }
            
        </div>
    )
}

export default TestimonialsPage