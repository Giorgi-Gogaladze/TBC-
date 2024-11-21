import React from 'react'

function Contact() {
  return (
    <section className='contact main-width py-4 flex items-center justify-between pb-6 min-h-[57.8vh]'>
  <div className='half flex flex-col w-full md:w-5/12'>
    <img 
      src='/assets/contact-us-image.jpg' 
      alt="contactUs" 
      className='h-full w-full object-cover object-center border-4 border-[#c06e4d] rounded-[30%_70%_70%_30%] md:rounded-[30%_30%_70%_70%]'
    />
  </div>
  <div className='half p-5 flex flex-col'>
    <form className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl font-extrabold text-black'>Contact Us</h1>
      <input 
        type="text" 
        name="name"  
        placeholder='Name...' 
        className='text-xl p-3 border-none'
      />
      <input 
        type="email" 
        name="email" 
        placeholder='Email...' 
        className='text-xl p-3 border-none'
      />
      <textarea 
        name="message" 
        placeholder='Message...' 
        className='text-xl p-3 border-none'
      />
      <button className='max-w-[100px] bg-black text-white text-2xl py-3 px-4 rounded-full cursor-pointer hover:scale-105 transition-all'>
        Contact
      </button>
    </form>
  </div>
</section>



  )
}

export default Contact;