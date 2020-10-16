import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import '../../sass/_contact-form.scss'

export default function ContactForm() {
  const [ emailSent, setEmailSent ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ program, setProgram ] = useState('')
  const [ name, setName ] = useState('')
  const [ message, setMessage ] = useState('')

  function clearInputs() {
    setEmail('')
    setName('')
    setProgram('')
    setMessage('')
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('livefreelivewell', 'template_Pw1pVkuC', e.target, 'user_S2Asg2P9oH9PzcLATX4Ja')
      .then((result) => {
          setEmailSent(<p>Thank you for contacting me, please allow 24-48 hours for reply. In the meantime, start by scheduling a Strategy Session to begin the next step.</p>)
          clearInputs()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
        {emailSent}
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      <label>Which program are you interested in?</label>
        <select className="programs" name="programs" value={program} onChange={e => setProgram(e.target.value)}>
            <option value="remotetraining">Remote Coaching</option>
            <option value="kettlebellclub">Kettlebell Club</option>
            <option value="virtualtraining">Personal Training Virtual</option>
            <option value="virtualtraining">Personal Training In Person</option>
        </select>
      <label>Message</label>
      <textarea rows="10" name="message" value={message} onChange={e => setMessage(e.target.value)} />
      <input className="btn" type="submit" value="Send" />
    </form>
  );
}