import React, {useState} from 'react'
import '../../sass/_contact.scss'

const Contact = () => {
    const [email,setEmail] = useState('')
    const [firstName,setfirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="contact">
            <form className="contact__form" id="contactform" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" id="fname" placeholder="First Name" value={firstName} onChange={e => setfirstName(e.target.value)} />
                <label>Last Name</label>
                <input type="text" id="lname" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <label>Email</label>
                <input type="email" id="email" placeholder="Your Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <label>Message</label>
                <input type="textarea" name="message" form="contactform" rows="10" cols="30" value={message} onChange={e => setMessage(e.target.value)} />
                <input className="contact__submit-btn" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact