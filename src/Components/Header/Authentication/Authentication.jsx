'use client'
import './Authentication.css';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

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
      <button className="signup-button">Sign Up</button>
    </section> 
  )
}

export default Authentication;
