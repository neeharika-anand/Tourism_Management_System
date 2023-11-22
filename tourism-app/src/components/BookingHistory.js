import React from "react";
import { useState } from "react";
import axios from "axios";
import "./BookingStatus.css";
import { useEffect } from "react";


const BookingHistory = ({ logInDetails }) => {
  
  console.log(logInDetails.mail_id);
  const [bookingResults, setBookingResults] = useState([]);
  const [guestResults, setGuestResults] = useState([]);
  //const [shouldRefresh, setShouldRefresh] = useState(false);
  
  useEffect(() => {
    console.log("in useeffect");
    axios
      .get(`http://localhost:8080/booking-history`, {
        params: { mail_id: logInDetails.mail_id },
      })
      .then((response) => {
        console.log("in frontend: ", response.data);
        const { bookingData, guestData } = response.data;
        console.log("Booking Data:", bookingData);
        console.log("Guest Data:", guestData);
        setBookingResults(bookingData);
        setGuestResults(guestData);
        //console.log("tour details", response);
      })
      .catch((error) => {
        console.error("Error fetching tour dates:", error);
      });
  }, [logInDetails.mail_id]);
  if (bookingResults.length === 0) {
    return <div className="bookingstatus">No previous bookings</div>;
  }

  

  // Rendering in JSX
  return (
    <div className="bookingstatus">
        <h3>Booking History</h3>
        <br/>
      <h5>Booking Information</h5>
      

      {bookingResults.map((result) => (
        <div key={result.booking_id}>
          <p>Booking ID: {result.booking_id}</p>
          <p>Booking Date: {new Date(result.booking_date).toDateString()}</p>
          <p>Package ID: {result.package_id}</p>
          <p>Start Date: {new Date(result.start_date).toDateString()}</p>
          <p>End Date: {new Date(result.end_date).toDateString()}</p>
          <p>Guide ID: {result.guide_id ? result.guide_id : "Not assigned"}</p>

          <table>
            <thead>
              <tr>
                <th>Guest First Name</th>
                <th>Guest Last Name</th>
                <th>Age</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {guestResults
                .filter((guest) => guest.booking_id === result.booking_id)
                .map((guest, index) => (
                  <tr key={index}>
                    <td>{guest.guest_fname}</td>
                    <td>{guest.guest_lname}</td>
                    <td>{guest.Age}</td>
                    <td>{guest.mobile_number}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;
