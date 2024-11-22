'use client'
import React, { useEffect, useState } from 'react';
import Loading from '../../Components/loading/Loading';
import {fetchUser} from '../../Utilities/fetchUser';

interface ProfileData {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
}
function Profile() {
  const [profileData, setProfileData] = useState <ProfileData | null>(null);


 useEffect(() => {
  const getProfileData = async () => {
    try {
      const data = await fetchUser();
      setProfileData(data);
    } catch (error) {
      console.log(error) 
    } 
  }
  getProfileData();
 }, [])


  if (!profileData) return <Loading />

  return (
    <article className='main-width profile min-h-[57.8vh]'>
  <div className='relative flex flex-col items-center bg-white rounded-2xl p-10'>
    <div className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px]'>
      <img src={profileData.image} alt="user image" className="w-full h-full rounded-full border-3 border-white" />
    </div>
    <div className='w-[400px] mt-[30px] px-5 py-3 text-center'>
      <form className='flex flex-col'>
        <label className='flex justify-start'>Name:</label>
        <input 
          type="text" 
          name="name" 
          defaultValue={profileData.firstName} 
          readOnly 
          className="mb-2 p-2 bg-beige border-none" 
        />
        <label className='flex justify-start'>LastName:</label>
        <input 
          type="text" 
          name="lastName" 
          defaultValue={profileData.lastName} 
          readOnly 
          className="mb-2 p-2 bg-beige border-none" 
        />
        <label className='flex justify-start'>Email:</label>
        <input 
          type="email" 
          name="email" 
          defaultValue={profileData.email} 
          readOnly 
          className="mb-2 p-2 bg-beige border-none" 
        />
      </form>
    </div>
  </div>
</article>
  );
}

export default Profile;
