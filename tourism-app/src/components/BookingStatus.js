import React from "react";
import { useState } from "react";
import axios from "axios";
import "./BookingStatus.css";
import { useEffect } from "react";
import TourButton from "./TourButton";

const BookingStatus = ({ logInDetails }) => {
  console.log(logInDetails.mail_id);
  const [bookingResults, setBookingResults] = useState([]);
  const [guestResults, setGuestResults] = useState([]);
  const [vehicleResults, setVehicleResults] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  //const [shouldRefresh, setShouldRefresh] = useState(false);
  const handleDelete = (bookingid) => {
    console.log("booking id:" + bookingid);
    // Prepare the data to be sent to the server
    // Send the POST request to your backend to create the purchase
    axios
      .post("http://localhost:8080/delete-booking", {
        bookingid: bookingid,
      })

      .then((response) => {
        // Handle success, e.g., clear purchaseItems and show a success message

        console.log("Booking canceled successfully:", response.data);
        //setShouldRefresh(true);

        // You can add additional logic here, such as showing a success message.
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error deleting booking:", error);
        // You can add additional error handling logic here.
      });
  };
  useEffect(() => {
    console.log("in useeffect");
    axios
      .get(`http://localhost:8080/booking-info`, {
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

  const showVehicleInformation = (tourID) => {
    console.log("in func" + tourID);
    axios
      .get(`http://localhost:8080/vehicle-info`, {
        params: { tourID: tourID },
      })
      .then((response) => {
        console.log("in frontend: ", response.data[0]);
        const tourData = response.data[0];
        console.log("tour Data:", tourData);
        setVehicleResults(tourData);
        console.log("vehicle" + vehicleResults);
        if (vehicleResults.length === 0) {
          setVehicleNumber("Not assigned yet");
        } else {
          console.log("set vehicle number");
          setVehicleNumber(vehicleResults.vehicle_no);
        }

        //console.log("tour details", response);
      })
      .catch((error) => {
        console.error("Error fetching tour dates:", error);
      });
  };

  if (bookingResults.length === 0) {
    return (
      <div className="bookingstatus">Booking Status: No Package Booked</div>
    );
  }

  // Rendering in JSX
  return (
    <div className="bookingstatus">
      <h3>Booking Status: Booking Confirmed</h3>
      <br />
      <h5>Booking Information</h5>

      {bookingResults.map((result) => (
        <div key={result.booking_id}>
          <p>Booking ID: {result.booking_id}</p>
          <p>Booking Date: {new Date(result.booking_date).toDateString()}</p>
          <p>Tour ID: {result.tour_id}</p>
          <p>Package ID: {result.package_id}</p>
          <p>Start Date: {new Date(result.start_date).toDateString()}</p>
          <p>End Date: {new Date(result.end_date).toDateString()}</p>
          <p>Guide ID: {result.guide_id ? result.guide_id : "Not assigned"}</p>

          <button onClick={() => showVehicleInformation(result.tour_id)}>
            Vehicle Information
          </button>
          <p>{vehicleNumber}</p>
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
                    <td>{guest.mobilenumber}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr />
          <TourButton onClick={() => handleDelete(result.booking_id)}>
            Cancel Booking
          </TourButton>
        </div>
      ))}
    </div>
  );
};

export default BookingStatus;
