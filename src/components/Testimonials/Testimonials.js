import React from 'react'
import '../../sass/_testimonials.scss'

import { testimonials } from '../../const/testimonials'

const Testimonials = () => {
    return (
        <div className="testimonials">
            {
                testimonials.map((testimony, idx) =>
                    <div className="testimonials__content">
                        <p>{`"${testimony.body}"`}</p>
                        <h2>{`— ${testimony.name}`}</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Testimonials