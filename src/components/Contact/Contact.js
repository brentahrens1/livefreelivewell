import React, {useState} from 'react'
import '../../sass/_contact.scss'

import axios from 'axios'


const Contact = () => {
    const [email,setEmail] = useState('')
    const [firstName,setfirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [mailSent, setMailSent] = useState(false)
    const [error, setError] = useState(null)

    return (
        <div className="contact">
            <form>
                <label>First Name</label>
                <input type="text" id="fname" placeholder="First Name" value={firstName} onChange={e => setfirstName(e.target.value)} />
                <label>Last Name</label>
                <input type="text" id="lname" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <label>Email</label>
                <input type="email" id="email" placeholder="Your Email" 
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    />
                <input type="submit" onClick={e => handleFormSubmit(e)} value="Submit"/>
                <div>
                    {mailSent &&
                        <div>Thank you for contcting us.</div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Contact