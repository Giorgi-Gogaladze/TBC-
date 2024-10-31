'use client'
import React, { useEffect, useState } from 'react';
import './Profile.css';
import Loading from '../../Components/loading/Loading';
import {fetchUser} from '../../Utilities/fetchUser';


function Profile() {
  const [profileData, setProfileData] = useState(null);


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
