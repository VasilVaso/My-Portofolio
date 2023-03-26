import emailjs from '@emailjs/browser';

import "./FormStyles.css"

import {React, useRef} from 'react'




const Form = () => {

 
  const form = useRef();

  const sendEmail = (e) => {
    alert("Email Sent!");
    e.preventDefault();

    emailjs.sendForm('service_hixupzp', 'template_89ch1br', form.current, 'jBjCxRl6ikxjyuYFk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name='user_subject'></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="message"/>
            <button className="btn" type="submit" value="Send">Submit</button>
        </form>
    </div>
  )
}




export default Form