import React from 'react';
import './Profile.css'

const GuideProfile = ({ logInDetails }) => {

  return (
    <div className='profile'>
      
      <h1>User Profile</h1>
      <p>Guide ID: {logInDetails.guide_id}</p>
      <p>Name: {logInDetails.guide_fname} {logInDetails.guide_lname}</p>
      <p>Age: {logInDetails.phone_no}</p>
      <p>Package ID: {logInDetails.package_id}</p>
      <p>Email: {logInDetails.mail_id}</p>
    </div>

  );
};

export default GuideProfile;