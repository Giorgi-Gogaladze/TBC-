'use client'
import './Authentication.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { fetchUser } from '../../../Utilities/fetchUser';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeSelector from '../../theme-selector/ThemeSelector';
import { UserData } from './interfaces/user';

const Authentication: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null)
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
      {userData ? (
              <Link href="/profile">
              <div className="user-image">
                <img src={userData.image} alt={`${userData?.name}`} />
              </div>
            </Link>
      ) : (
        <div className='text-red-600'>Loading...</div>
      )}
      <ThemeSelector />
    </section>
  )
}

export default Authentication;
