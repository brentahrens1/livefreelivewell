import React from 'react'
import '../../sass/_testimonials.scss'

import { testimonials } from '../../const/testimonials'

const Testimonials = () => {
    let count = 0

    setInterval(() => {
        let testimonial = document.querySelector(".testimonials__content")
        let randomNumber = Math.floor(Math.random() * 11)
        count = (count + randomNumber) % testimonials.length
        let newTestimony = testimonials[count]
        testimonial.innerHTML = `<p>"${newTestimony.body}"<p>
                                 <h1>— ${newTestimony.name}</h1>`
    }, 4000)

    return (
        <div className="testimonials">
            <div className="testimonials__content">   
            </div>
        </div>
    )
}

export default Testimonials