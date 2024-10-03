import React from 'react'
import './Blog.css'
import diddy from '../../assets/diddy.jpg'
import beyonce from '../../assets/beyonce.jpg'
import jayZ from '../../assets/jayZ.jpg'

function Blog() {
  return (
    <section className='main-width blog'>
        <div className="heading">
            <h1>Our Blog</h1>
        </div>
        <div className='blog-cards'>
            <div className="card">
                <div className="image">
                    <img src={diddy} alt="diddy" />
                </div>
                <div className='info'>
                    <h3>Puff Diddy</h3>
                    <p>P. Diddy (Sean Combs) is an American rapper, record producer, and entrepreneur, known for founding Bad Boy Records and his influence on the hip-hop and fashion industries.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="card">
                <div className="image">
                    <img src={beyonce} alt="beyonce" />
                </div>
                <div className='info'>
                    <h3>Beyonce</h3>
                    <p>
                    Beyoncé is an American singer, songwriter, and actress, renowned for her powerful voice, dynamic performances, and influence on pop and R&B music.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="card">
                <div className="image">
                    <img src={jayZ} alt="jayZ" />
                </div>
                <div className='info'>
                    <h3>Jay Z</h3>
                    <p>Jay-Z (Shawn Carter) is an American rapper, entrepreneur, and record executive, known for his influential hip-hop career and business ventures, including Roc Nation and Tidal.</p>
                    <button>Read More</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Blog