import React from 'react'
import '../../sass/_testimonials-page.scss'
import ReadMoreReact from 'read-more-react';

import { testimonials } from '../../const/testimonials'

const TestimonialsPage = () => {
    return (
        <div className="testimonials-page">
            <h1>Client Stories</h1>
            {
                testimonials.map((testimonial, idx) => 
                    <div key={idx} className="page">
                        <ReadMoreReact text={
                            testimonial.body
                        }
                        readMoreText="read more"/>
                        <h3>- {testimonial.name}</h3>
                        <hr />
                    </div>
                )
            }
            
        </div>
    )
}

export default TestimonialsPage