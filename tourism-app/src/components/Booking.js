
import React, { useState, useEffect} from "react";
import "./Booking.module.css";
import { useNavigate } from "react-router-dom";
import TourButton from "./TourButton";
import "bootstrap/dist/css/bootstrap.min.css";
import GuestDetails from "./GuestDetails";
import axios from "axios";

const Booking = ({ logInDetails, selectedp, onBooking}) => {
console.log(selectedp)
const packageId = selectedp.package_id
const [startDate, setStartDate] = useState("");
const [tourID, setTourID] = useState("");
const [totalprice, setTotalPrice] = useState("");
  const handleSubmit = () => {
    // Prepare the data to be sent to the server
  
  const bookinginfo = {
    date: new Date().toISOString().split('T')[0],
    email: logInDetails.mail_id,
    packageID: selectedp.package_id,
    tourID: tourID

  }
    
    // Send the POST request to your backend to create the purchase
    axios
      .post('http://localhost:8080/booking', {
        guestsData: guestsData,
        bookinginfo: bookinginfo,
        guestlength: guestsData.length,
      })
      .then((response) => {
        // Handle success, e.g., clear purchaseItems and show a success message
        console.log('Booking created successfully:', response.data);
        onBooking(guestsData, bookinginfo, selectedp)
        navigate('/booking-status');
        // You can add additional logic here, such as showing a success message.
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error creating booking:', error);
        // You can add additional error handling logic here.
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/tour-info`, {
        params: { package_id: packageId },
      })
      .then((response) => {
        console.log(response);
        setStartDate(response.data[0].start_date);
        setTourID(response.data[0].tour_id)
        console.log("tour details", tourID);
      })
      .catch((error) => {
        console.error("Error fetching tour dates:", error);
      });
  }, [packageId, startDate, tourID]);





  
  const navigate = useNavigate();
  
  const [buttonStyle, setButtonStyle] = useState({});
 
  function getOrdinalIndicator(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  const dateObject = new Date(startDate);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('en-us', { month: 'short' });
  const year = dateObject.getFullYear();

  const ordinalIndicator = getOrdinalIndicator(day);

  const formattedDate = `${month} ${day}${ordinalIndicator} ${year}`;

console.log(formattedDate);
  const numberOfGuests = 5

  // functionality for guests
  const [guests, setGuests] = useState([]);
  const [guestsData, setGuestsData] = useState([]);

  const addGuest = () => {
    if (guests.length < numberOfGuests) {
      setGuests([...guests, guests.length]);
      setGuestsData([
        ...guestsData,
        { firstName: "", lastName: "", mobileNumber: "", email: "" },
      ]);
    } else {
      setButtonStyle({
        background: "#ccc",
        color: "#999",
        cursor: "not-allowed",
        position: "relative",
      });
    }
  };
console.log(guestsData)
  const removeGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    const updatedGuestsData = guestsData.filter((_, i) => i !== index);
    setGuests(updatedGuests);
    setGuestsData(updatedGuestsData);
    setButtonStyle({});
  };

  const updateGuestData = (index, data) => {
    const updatedGuestsData = [...guestsData];
    updatedGuestsData[index] = data;
    setGuestsData(updatedGuestsData);
  };

  const handleSaveData = (guestData) => {

    axios
      .get(`http://localhost:8080/calculateTourPrice`, {
        params: {guestlength: guestData.length, basePrice: selectedp.price},
      })
      .then((response) => {
        console.log(response);
        setTotalPrice(response.data.totalPrice)
        
      })
      .catch((error) => {
        console.error("Error fetching tour dates:", error);
      });
  };

  
  
  // Example usage:

  
  
  
  
  
  return (
    <div className="booking-app" style = {{margin:'30px'}}>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="book">
      <h3>Booking Process</h3>
      <p>Selected package is: {selectedp.name}</p>
      <p>Date of Tour: {formattedDate}</p>
      <p>ID of Tour: {tourID}</p>

      <br/>
      <br/>

     

      <h3>Step 1: Confirm Profile Details</h3>
      <div>
        <p>
          Name: {logInDetails.cust_fname} {logInDetails.cust_lname}
        </p>
        <p>Age: {logInDetails.age}</p>
        <p>Gender: {logInDetails.gender}</p>
        <p>Email: {logInDetails.mail_id}</p>
      </div>
      {/* <div>
        <p>
          Name: cust_fname cust_lname
        </p>
        <p>Age: age</p>
        <p>Gender: logInDetails.gender</p>
        <p>Email: logInDetails.mail_id</p>
      </div> */}
      
      <div className="bookcontainer">
        {guests.map((guest, index) => (
          <div className="guest-details" key={index}>
            Guest {index + 1}
            <GuestDetails
              index={index}
              guestData={guestsData[index]}
              onRemove={() => removeGuest(index)}
              onUpdateGuestData={updateGuestData}
            />
          </div>
        ))}
        <button style={buttonStyle} onClick={addGuest}>
          Add Guest
        </button>
        <button className="save-data-button" onClick={()=>handleSaveData(guestsData)}>
          Save Data
        </button>
      </div>

      

      <h2>Step 2: Payment</h2>
      <h6>Required to pay: {totalprice}</h6>
      <TourButton onClick={handleSubmit}>Pay</TourButton>
    </div>
    </div>
  );
};

export default Booking;
