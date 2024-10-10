import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className='contact main-width'>
      <div className='half'>
        <img src='/assets/contact-us-image.jpg' alt="contactUs" />
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