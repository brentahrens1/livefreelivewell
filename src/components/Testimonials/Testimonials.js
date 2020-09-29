import React from 'react'
import '../../sass/_testimonials.scss'

import { testimonials } from '../../const/testimonials'

const Testimonials = () => {
    let count = 0

    setInterval(() => {
        let testimonial = document.querySelector(".testimonials__content")
        count++
        if (count === testimonials.length) {
            count = 0
        }
        let newTestimony = testimonials[count]
        testimonial.innerHTML = `<p>"${newTestimony.body}"<p>
                                 <h3>— ${newTestimony.name}</h3>`
    }, 4000)

    return (
        <div className="testimonials">
            <h1>Testomonials</h1>
            <div className="testimonials__content">   
            </div>
        </div>
    )
}

export default Testimonials