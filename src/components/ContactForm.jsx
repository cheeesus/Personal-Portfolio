import React from 'react'

function ContactForm() {
  return (
    <div className='contact-form'>
        <form action="">
            <div class="input-container">
                <input type="text" required=""/>
                <label>Full Name</label>		
            </div>
            <div class="input-container">		
                <input type="mail" required=""/>
                <label>Email</label>
            </div>
            <div class="input-container">	
                <textarea name="" id="" cols="" rows="3"></textarea>	
                <label>Your message:</label>
            </div>
            <button class="contact-button">Send Message</button>  
        </form>
    </div>
  )
}

export default ContactForm
