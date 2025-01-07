'use client'
import './Authentication.css';
import { useRouter } from 'next/navigation';
import { fetchUser } from '../../../Utilities/fetchUser';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeSelector from '../../theme-selector/ThemeSelector';
import { logout } from '@/app/logout/actions';


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
/* 
  const handleLogOut = ()  => {
    Cookies.remove('accessToken')
    router.push('/login')
  } */

  return (
     <section className='authentication'>
      <form action={logout}>
          <button className="log-button" type='submit'>
          LogOut
        </button>
      </form>
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
