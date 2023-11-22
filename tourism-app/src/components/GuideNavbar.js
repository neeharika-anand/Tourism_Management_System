import React from 'react';
import { Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import TourButton from './TourButton'; 
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


const GuideNavigationBar = ({ isLoggedIn, logInDetails}) => {
  const navigate = useNavigate();

  return (
    <header className="fixed-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logoContainer">
            {/* Your brand content */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`ms-auto align-items-center`}
            >
              <Nav.Link
                onClick={() => navigate("/guide-home")}
              >
                Your Tours
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/guide-tours")}>Upcoming Tours</Nav.Link>
              {isLoggedIn ? (
                <>
                  {
                    <Nav className="me-auto">
                    <NavDropdown title={`${logInDetails.guide_name}`}  id="collapsible-nav-dropdown">
                      <NavDropdown.Item onClick={() => navigate("/my-profile")}>View Profile</NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                }
                </>
              ) : (
                <TourButton
                  onClick={() => navigate("/guide-login")}
                  color="green"
                >
                  Login
                </TourButton>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default GuideNavigationBar;