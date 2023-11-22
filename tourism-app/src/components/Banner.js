import React from "react";
import classes from "./Banner.module.css"
import TourButton from "./TourButton";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate()
    /* Banner Section */
    return (
      <section className={classes.banner}>
        <div className={classes["banner-content"]}>
          <h1>Welcome To Holiday Dreams</h1>
          <h3>Think of a place, We'll arrange for you</h3>
          <TourButton color="white" size="lg" onClick={() => navigate('/packages')} >
              Discover our Tours
          </TourButton>
        </div>
      </section>
    );
  };
  
  export default Banner;