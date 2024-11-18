import React from 'react'
import './AboutUs.css'
import { useTranslations } from 'next-intl'

function AboutUs() {
  const t = useTranslations('AboutUs')
  return (
    <div className='about-us main-width'>
      <p>
        {t ('content')}
      </p>
    </div>
  )
}

export default AboutUs