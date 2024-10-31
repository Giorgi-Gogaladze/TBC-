'use client'
import React, { useEffect, useState } from 'react';
import './Profile.css';
import Cookies from 'js-cookie';
import Loading from '../../Components/loading/Loading';

async function fetchProfile() {
  const token = Cookies.get('accessToken');

  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`profile info didn't fetch`);
  }
  return response.json();
}

function Profile() {
  const [profileData, setProfileData] = useState(null);


 useEffect(() => {
  const getProfileData = async () => {
    try {
      const data = await fetchProfile();
      setProfileData(data);
    } catch (error) {
      console.log(error) 
    } 
  }
  getProfileData();
 }, [])


  if (!profileData) return <Loading />

  return (
    <article className='main-width profile'>
      <div className='whole-card'>
        <div className='norton'>
          <img src={profileData.image} alt="user image" />
        </div>
        <div className='information'>
          <form>
            <label>Name:</label>
            <input type="text" name="name" defaultValue={profileData.firstName} readOnly />
            <label>LastName:</label>
            <input type="text" name="lastName" defaultValue={profileData.lastName} readOnly />
            <label>Email:</label>
            <input type="email" name="email" defaultValue={profileData.email} readOnly />
          </form>
        </div>
      </div>
    </article>
  );
}

export default Profile;
