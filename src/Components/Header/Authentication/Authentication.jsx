'use client'
import './Authentication.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { fetchUser } from '../../../Utilities/fetchUser';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeSelector from '../../theme-selector/ThemeSelector';


 function Authentication() {
  const [userData, setUserData] =useState([])
  const router = useRouter();

  useEffect(() => {
    async function getData() {
       try {
      const data = await fetchUser();
      setUserData(data)
    } catch (error) {
      console.log(error)
    }
    }
    getData()
  },[])

  const handleLogOut = ()  => {
    Cookies.remove('accessToken')
    router.push('/login')
  }

  return (
     <section className='authentication'>
          <button className="log-button" onClick={handleLogOut}>
          Log Out
        </button>
        <Link href="/profile">
      <div className="user-image">
        <img src={userData.image} alt="suerImage" />
      </div>
      </Link>
      <ThemeSelector />
    </section> 
  )
}

export default Authentication;
