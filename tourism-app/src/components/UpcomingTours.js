import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const UpcomingTours = ({ logInDetails }) => {
  const navigate = useNavigate();
    console.log(logInDetails.guide_id);
    const [tourResults, setTourResults] = useState([]);
    const [noBooked, setNoBooked] = useState([]);
    
    //const [shouldRefresh, setShouldRefresh] = useState(false);
    const handleAccept = (tourID) => {
      console.log('tour id:'+ tourID)
      // Prepare the data to be sent to the server
      // Send the POST request to your backend to create the purchase
      axios
        .post('http://localhost:8080/accept-tour', {
          tourID: tourID,
          guideID: logInDetails.guide_id
        })
  
        .then((response) => {
            navigate('/accepted-tours')
          // Handle success, e.g., clear purchaseItems and show a success message
  
          console.log('Tour updated', response.data);
          //setShouldRefresh(true);
          
          // You can add additional logic here, such as showing a success message.
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message
          console.error('Error updating tour:', error);
          // You can add additional error handling logic here.
        });
    };


    useEffect(() => {
      console.log("in useeffect");
      axios
        .get(`http://localhost:8080/available-tours`, { 
            params: { packageID: logInDetails.package_id, guideID: logInDetails.guide_id}
        })
        .then((response) => {
          console.log("in frontend: ", response.data);
          const tourData = response.data;
          console.log("Booking Data:", tourData);
          setTourResults(tourData);
          //console.log("tour details", response);
        })
        .catch((error) => {
          console.error("Error fetching tour dates:", error);
        });
    }, [logInDetails.package_id, logInDetails.guide_id]);

    useEffect(() => {
      console.log("in useeffect 2");
      axios
        .get(`http://localhost:8080/no-booking`, { 
          params: { packageID: logInDetails.package_id}
            
        })
        .then((response) => {
          console.log("in frontend: ", response.data);
          const tours = response.data;
          console.log("Booking Data:", tours);
          setNoBooked(tours);
          //console.log("tour details", response);
        })
        .catch((error) => {
          console.error("Error fetching tour dates:", error);
        });
    }, [logInDetails.package_id]);

    const noBookTours = noBooked.map((item) => item.tour_id);
    console.log(noBookTours)
    const showStatus = (tourID) =>{
      for(let i = 0; i < noBookTours.length; i++){
        if(tourID === noBookTours[i]){
          console.log('No Bookings');
          return 'No Bookings'
        }
      }
        console.log('Booked');
        return 'Booked'
      
    }


    if (tourResults.length === 0) {
      return <div className="bookingstatus">No tours available</div>;
    }
  
    
  
    // Rendering in JSX
    return (
      <div className="bookingstatus">
          <h3>Upcoming Tours</h3>
          <br/>
        
          <div>
            <table>
              <thead>
                <tr>
                  <th>Tour ID</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Booking Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tourResults
                  .map((result) => (
                    <tr key={result.tour_id}>
                      <td>{result.tour_id}</td>
                      <td>{new Date(result.start_date).toDateString()}</td>
                      <td>{new Date(result.end_date).toDateString()}</td>
                      <td>{showStatus(result.tour_id)}</td>
                      <td><button onClick={() => handleAccept(result.tour_id)} >Accept Tour</button></td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <hr />
        
          </div>
        
      </div>
    );
  };

export default UpcomingTours;
