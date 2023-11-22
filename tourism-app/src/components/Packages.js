import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TourButton from "./TourButton";
import img from "../images/PONDY.jpg";
import img1 from "../images/GOA.jpg";
import img2 from "../images/kerala-backwaters.jpg";
import img3 from "../images/CHENNAI.jpg";
import img4 from "../images/OOTY.jpg";
import img5 from "../images/MYSORE.jpg";
import "./Packages.css";
import axios from "axios";
const Packages = () => {
  const navigate = useNavigate();
  const scrollToTopAndNavigate = (path) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  
    // Navigate to the new location
    navigate(path);
  };
  const [packages, setPackages] = useState([]);
  const[popularTour, setPopularTour] = useState("");
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        image: img,
        name: "Serenity by the Sea: Pondicherry Getaway",
        description:
          "Explore the serene union territory of Pondicherry, known for its charming French colonial architecture, tranquil beaches, and a spiritual aura that permeates the streets. Immerse yourself in the unique blend of cultures and savor delectable cuisine while experiencing a sense of tranquility.",
      },
      {
        id: 2,
        image: img1,
        name: "Golden Goa Getaway: Beaches and Beyond",
        description:
          "Enjoy a beach vacation in Goa, India's coastal paradise. Bask in the golden sunlight on its beautiful beaches, indulge in water sports, and discover vibrant nightlife. Experience a blend of rich history, stunning landscapes, and a laid-back atmosphere that makes Goa a top travel destination.",
      },
      {
        id: 3,
        image: img2,
        name: "Kerala Kaleidoscope: Culture, Cuisine, and Coastlines",
        description:
          "Visit 'God's Own Country' - Kerala, renowned for its lush green landscapes, serene backwaters, pristine beaches, and rich cultural heritage. Explore the tranquil backwaters on traditional houseboats, witness the vibrant traditions of the region, and savor mouthwatering South Indian cuisine.",
      },
      {
        id: 4,
        image: img3,
        name: "Classical Cadence: Arts & Architecture in Chennai",
        description:
          "Explore the bustling metropolis of Chennai, a city that seamlessly blends tradition with modernity. Visit historic temples, admire Dravidian architecture, and indulge in the vibrant art and culture scene. Discover a blend of history and urban development in the heart of Tamil Nadu.",
      },
      {
        id: 5,
        image: img4,
        name: "Hill Station Harmony: Ooty & Coonoor Duo",
        description:
          "Dwell in the lush tea gardens, serene lakes, and cool climate of the 'Queen of Hill Stations.' Ooty and Coonoor offer a picturesque escape in the Nilgiri Hills, featuring scenic train rides, botanical gardens, and a tranquil atmosphere that invites relaxation.",
      },
      {
        id: 6,
        image: img5,
        name: "Garden Trails and Palace Sojourn: Exploring Bangalore & Mysore",
        description: "Explore the Garden City of India and the cultural marvel of Mysore. In Bangalore, discover the IT hub's vibrant nightlife, tech parks, and a mix of old and new. In Mysore, delve into royal palaces, traditional silk sarees, and a rich heritage that showcases the grandeur of the Wodeyar dynasty.",
      },
    ];

    setPackages(mockData);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/popular-package`, {
        
      })
      .then((response) => {
        console.log(response);
        setPopularTour(response.data.package_id);
        console.log('popular'+ popularTour)
        
      })
      .catch((error) => {
        console.error("Error fetching tour dates:", error);
      });
  }, [popularTour]);

  return (
    <div className="packages-container">
      <h1>Discover Your Dream Destinations</h1>
      {packages.map((tourPackage) => (
        <div key={tourPackage.id} className="package">
          <img
            src={tourPackage.image}
            alt={tourPackage.name}
            className="package-image"
          />
          <div className="package-details">
          
            <h2 className="package-name">{tourPackage.name}</h2>
            {popularTour === tourPackage.id ? (
        <div className="most-popular-info">
          {/* Display details of the most popular tour */}
          <h5>Most Popular Tour</h5>
          {/* Add details specific to the most popular tour */}
        </div>
      ) : null}
            <p className="package-description">{tourPackage.description}</p>
            <TourButton
              onClick={() => scrollToTopAndNavigate(`/packages/${tourPackage.id}`)}
              className="read-more"
            >
              Read more
            </TourButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
