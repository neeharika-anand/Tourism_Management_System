// import logo from "./logo.svg";
//import "./App.css";
import React, { useState } from "react";
import Registration from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Landing";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Booking from "./components/Booking";
import Packages from "./components/Packages";
import PackageDetails from "./components/PackageDetails";
import GuideLogin from "./components/GuideLogin";
import GuideLanding from "./pages/GuideLanding";
import GuideProfile from "./components/GuideProfile";
import BookingStatus from "./components/BookingStatus";
import BookingHistory from "./components/BookingHistory";
import UpcomingTours from "./components/UpcomingTours";
import YourTours from "./components/YourTours";
import AcceptedTours from "./components/AcceptedTours";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInDetails, setlogInDetails] = useState(null);
  const [isGuideLoggedIn, setIsGuideLoggedIn] = useState(false);
  const [selectedp, setselectedp] = useState(false);
  const [guestsData, setguestsData] = useState(null);
  const [bookinginfo, setbookinginfo] = useState(null);
  const [didBook, setdidBook] = useState(false);

  const handleLogin = (email, userData) => {
    setIsLoggedIn(true);
    setlogInDetails(userData);
  };

  const handleGuideLogin = (email, guideData) => {
    setIsGuideLoggedIn(true);
    setlogInDetails(guideData);
  };

  const selectpkg = (selectedPackage) => {
    setselectedp(selectedPackage);
  };

  const handleBooking = (guestsData, bookinginfo, selectedp) => {
    setdidBook(true);
    setguestsData(guestsData);
    setbookinginfo(bookinginfo);
    setselectedp(selectedp);
    console.log("in app" + selectedp);
  };

  return (
    <div className="App">
      <Router>
        <NavigationBar
          isLoggedIn={isLoggedIn}
          logInDetails={logInDetails}
          isGuideLoggedIn={isGuideLoggedIn}
        />
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}

          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Registration />} />
          <Route
            exact
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            exact
            path="/my-profile"
            element={<Profile logInDetails={logInDetails} />}
          />
          <Route
            exact
            path="/booking"
            element={
              <Booking
                logInDetails={logInDetails}
                selectedp={selectedp}
                onBooking={handleBooking}
              />
            }
          />
          <Route exact path="/packages" element={<Packages />} />
          <Route
            path="/packages/:packageId"
            element={
              <PackageDetails
                isLoggedIn={isLoggedIn}
                logInDetails={logInDetails}
                selectPackage={selectpkg}
              />
            }
          />
          <Route
            exact
            path="/guide-login"
            element={<GuideLogin onGuideLogin={handleGuideLogin} />}
          />
          <Route exact path="/guide-home" element={<YourTours logInDetails={logInDetails}/>} />
          <Route
            exact
            path="/guide-profile"
            element={<GuideProfile logInDetails={logInDetails} />}
          />
          <Route
            exact
            path="/booking-status"
            element={<BookingStatus logInDetails={logInDetails} />}
          />

          <Route
            exact
            path="/booking-history"
            element={<BookingHistory logInDetails={logInDetails} />}
          />
          <Route
            exact
            path="/guide-tours"
            element={<UpcomingTours logInDetails={logInDetails} />}
          />
          <Route
            exact
            path="/accepted-tours"
            element={<AcceptedTours logInDetails={logInDetails} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
