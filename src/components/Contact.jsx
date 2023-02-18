import QuickChat from '../assets/quick_chat.svg'
import ContactForm from './ContactForm'
import Socials from './Socials'

function Contact() {
  return (
    <div className="contact" id="contact">
        <h2>Let's get in touch</h2>
        <div className='contact-wrapper'>
            <ContactForm />
            <div class="contact-illustration">
                <img src={QuickChat} alt=""/>
                <Socials />
            </div>
        </div>
    </div>
  )
}

export default Contact
