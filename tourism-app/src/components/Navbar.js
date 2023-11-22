// import React from 'react';
// import { Link} from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import TourButton from './TourButton';
// import { useNavigate } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const NavigationBar = ({ isLoggedIn, logInDetails, isGuideLoggedIn}) => {
//   const navigate = useNavigate();

//   return (
//     <header className="fixed-top">
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         className={`navbar`}
//       >
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="logoContainer">
//             {/* Your brand content */}
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav
//               className={`ms-auto align-items-center`}
//             >
//               <Nav.Link
//                 onClick={() => navigate("/")}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link onClick={() => navigate("/packages")}>Packages</Nav.Link>
//               {isLoggedIn ? (
//                 <>
//                   {
//                     <Nav className="me-auto">
//                     <NavDropdown title={`${logInDetails.cust_fname} ${logInDetails.cust_lname}`}  id="collapsible-nav-dropdown">
//                       <NavDropdown.Item onClick={() => navigate("/my-profile")}>View Profile</NavDropdown.Item>
//                       <NavDropdown.Item onClick={() => navigate("/booking-status")}>
//                         Booking Status
//                       </NavDropdown.Item>
//                       <NavDropdown.Item onClick={() => navigate("/booking-history")}>Booking History</NavDropdown.Item>
//                       <NavDropdown.Divider />
//                       <NavDropdown.Item href="/">
//                         Logout
//                       </NavDropdown.Item>
//                     </NavDropdown>
//                   </Nav>
//                 }
//                 </>
//               ) : (
//                 <TourButton
//                   onClick={() => navigate("/login")}
//                   color="green"
//                 >
//                   Login
//                 </TourButton>
//               )}
//               {isGuideLoggedIn ? (
//                 <>
//                   {
//                     <Nav className="me-auto">
//                       <Nav.Link
//                       onClick={() => navigate("/guide-home")}
//                     >
//                       Your Tours
//                     </Nav.Link>
//                     <Nav.Link onClick={() => navigate("/guide-tours")}>Upcoming Tours</Nav.Link>
//                     <NavDropdown title={`${logInDetails.guide_name} `}  id="collapsible-nav-dropdown">

//                       <NavDropdown.Divider />
//                       <NavDropdown.Item href="/">
//                         Logout
//                       </NavDropdown.Item>
//                     </NavDropdown>
//                   </Nav>
//                 }
//                 </>
//               ) : (
//                 <TourButton
//                   onClick={() => navigate("/login")}
//                   color="green"
//                 >
//                   Login
//                 </TourButton>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default NavigationBar;

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import TourButton from "./TourButton";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../images/logo1.png";

const NavigationBar = ({ isLoggedIn, logInDetails, isGuideLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed-top">
      <Navbar collapseOnSelect expand="lg" className={`navbar`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="logoContainer">
            <img src={img} alt="logo" style={{ width: "60px" }} />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link> */}
              {/* <Nav.Link onClick={() => navigate("/packages")}>
                Packages
              </Nav.Link> */}
              {isLoggedIn || isGuideLoggedIn ? (
                <>
                  {logInDetails.cust_fname && logInDetails.cust_lname ? (
                    <Nav className="me-auto">
                      <Nav.Link onClick={() => navigate("/packages")}>
                Packages
              </Nav.Link>
                      <NavDropdown
                        title={`${logInDetails.cust_fname} ${logInDetails.cust_lname}`}
                        id="collapsible-nav-dropdown"
                      >
                        <NavDropdown.Item
                          onClick={() => navigate("/my-profile")}
                        >
                          View Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          onClick={() => navigate("/booking-status")}
                        >
                          Booking Status
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          onClick={() => navigate("/booking-history")}
                        >
                          Booking History
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  ) : (
                    <Nav className="me-auto">
                      {/* <NavDropdown
                        title={`${logInDetails.guide_name}`}
                        id="collapsible-nav-dropdown"
                      > */}
                      <Nav.Link onClick={() => navigate("/guide-home")}>
                        Your Tours
                      </Nav.Link>
                      <Nav.Link onClick={() => navigate("/guide-tours")}>
                        Upcoming Tours
                      </Nav.Link>
                      <NavDropdown
                      title={`${logInDetails.guide_fname} ${logInDetails.guide_lname}`}
                      id="collapsible-nav-dropdown"
                      >
                        <NavDropdown.Item
                          onClick={() => navigate("/guide-profile")}
                        >
                          View Profile
                        </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                      </NavDropdown>
                      
                      {/* </NavDropdown> */}
                    </Nav>
                  )}
                </>
              ) : (
                <Nav className="me-auto">
                      <Nav.Link onClick={() => navigate("/packages")}>
                Packages
              </Nav.Link>
              
                <TourButton onClick={() => navigate("/login")} color="green" >
                  Login
                </TourButton>
              </Nav>
                
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
