import React from 'react';
import './Profile.css'

const Profile = ({ logInDetails }) => {

  return (
    <div className='profile'>
      
      <h1>User Profile</h1>
      <p>Name: {logInDetails.cust_fname} {logInDetails.cust_lname}</p>
      <p>Age: {logInDetails.age}</p>
      <p>Gender: {logInDetails.gender}</p>
      <p>Email: {logInDetails.mail_id}</p>
    </div>

  );
};

export default Profile;
