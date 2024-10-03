import React from 'react'
import './Profile.css'
import Norton from '../../assets/Norton.jpg'

function Profile() {
  return (
    <article className='main-width profile'>
        <div className='whole-card'>
            <div className='norton'>
                <img src={Norton} alt="Edward-Norton" />
            </div>
            <div className='information'>
                <form>
                    <label >Name:</label>
                    <input type="text" name="name" value='Edward' />
                    <label >LastName:</label>
                    <input type="text" name="lastName" value='Norton' />
                    <label >Email:</label>
                    <input type="email" name="email" value=' gogaladze.giorgi@tbcacademy.edu.ge' />
                </form>
                
            </div>
        </div>
    </article>
  )
}

export default Profile