'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { fetchLogin } from '../../../Utilities/fetchLogin';
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
    <section className="w-screen h-screen bg-gradient-to-l from-black via-gray-500 to-black p-8">
<div className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center border-3 border-gray-400 shadow-[5px_10px_40px_rgba(0,0,0,0.6)] rounded-lg gap-10" style={{ backgroundImage: "url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg')" }}>
<h1 className="font-sans text-white text-4xl">
  You Are Welcome

</h1>
<form className="flex flex-col gap-4 justify-center items-center p-8 rounded-lg border-2 border-transparent shadow-[15px_30px_30px_rgba(0,0,0,0.9)] bg-white"
      onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div>
        <input className="border-dotted border-2 border-gray-400 bg-[#e9e7e7] p-1 rounded-md" 
        type="text"
            value={username}
            required
            placeholder='Enter Your Username...'
            onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <input className="border-dotted border-2 border-gray-400 bg-[#e9e7e7] p-1 rounded-md" 
            type="password"
            value={password}
            required
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="px-5 py-2.5 bg-gray-800 text-white border border-black rounded-lg font-bold shadow-[5px_10px_10px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover:shadow-[5px_15px_15px_rgba(0,0,0,0.7)]"
        type='submit'>Log In</button>
      </form>
      </div>
    </section>
  );
}

export default Authorization;
