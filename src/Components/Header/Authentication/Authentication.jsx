'use client'
import './Authentication.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';


function Authentication() {
  const router = useRouter();

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
        <img src='/assets/Norton.jpg' alt="image" />
      </div>
      </Link>
    </section> 
  )
}

export default Authentication;
