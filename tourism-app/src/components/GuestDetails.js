import React from 'react';

function GuestDetails({ index, guestData, onRemove, onUpdateGuestData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onUpdateGuestData(index, { ...guestData, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={guestData.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={guestData.lastName}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="Age"
        placeholder="Age"
        value={guestData.age}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="mobilenumber"
        placeholder="Mobile Number"
        value={guestData.mobilenumber}
        onChange={handleInputChange}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default GuestDetails;
