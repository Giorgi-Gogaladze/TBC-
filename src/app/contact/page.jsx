import React from 'react'
import './Contact.css'
import contactUs from '../../assets/contact-us-image.jpg'

function Contact() {
  return (
    <section className='contact main-width'>
      <div className='half'>
        <img src={contactUs} alt="contactUs" />
      </div>
      <div className='half'>
        <form >
        <h1>Contact Us</h1>
          <input type="text" name="name"  placeholder='Name...'/>
          <input type="email" name="emali" placeholder='Emali...' />
          <textarea type="text" name="mes" placeholder='Message...'/>
          <button>contact</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;