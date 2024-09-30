import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className='about-us main-width'>
      <p>
        პროექტი შესრულებულის create-react-app_ით, რომელიც 'იქოქება' npm start ბრძანებით.
        გამოყენებულია react router სხვადასხვა გვერდებს შორის ნავიგაციისათვის. შექმნილია როუტები და მითითებული აქვთ დასარენდერებელი ფეიჯები...
        ვებსაიტი გნაკუთვნილია ყველა სახის ინფორმაციისათვის.
        არ არის რესპონსიული და ჯერჯერობით არ იყენებს რეაქტის ძირითად საკითხებს.
      </p>
    </div>
  )
}

export default AboutUs