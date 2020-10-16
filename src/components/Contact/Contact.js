import React, {useState} from 'react'
import '../../sass/_contact.scss'

import ContactForm from '../ContactForm/ContactForm'
const Contact = () => {

    return (
        <div className="contact">
            <h1>Let's set up your strategy session</h1>
            <ContactForm />
        </div>
    )
}

export default Contact