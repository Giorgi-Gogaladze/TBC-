'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { fetchLogin } from '../../../Utilities/fetchLogin';
import './login.css'
import Loading from '../../../Components/loading/Loading';


function Authorization() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  
  const handleSubmit = async (e) => {
      e.preventDefault();
      setisLoading(true)
      const {data, response} = await fetchLogin(username, password)

    if (response.ok && data.accessToken) {
      Cookies.set('accessToken', data.accessToken);
      router.push('/');

    } else {
        console.log('login failed:', data.message);
    }
    setisLoading(false)
};

useEffect(() => {
  const token = Cookies.get('accessToken');
  if (token) {
    router.push('/');
  }
}, [router]);

if(isLoading) {
  <Loading />
}

  return (
    <section className='login'>
      <div className='login-inner-div'>
        <h1>You Are Welcome</h1>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div>
          <input
            type="text"
            value={username}
            required
            placeholder='Enter Your Username...'
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input
            type="password"
            value={password}
            required
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Log In</button>
      </form>
      </div>
    </section>
  );
}

export default Authorization;
