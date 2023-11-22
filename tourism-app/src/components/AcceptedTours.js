import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../images/BANGALORE.jpg";
import img1 from "../images/GOA.jpg";
import img2 from "../images/KERALA.jpg";
import img3 from "../images/CHENNAI.jpg";
import img4 from "../images/OOTY.jpg";
import img5 from "../images/PONDI.jpg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Package.css";

    const AcceptedTours = ({ logInDetails  }) => {
        const [startDate, setStartDate] = useState("");
        const [tourID, setTourID] = useState("");
        const [isUpcoming, setIsUpcoming] = useState(false);
        const [showEmergency, setShowEmergency] = useState({});
        
        const toggleEmergency = (mailId) => {
            setShowEmergency((prevState) => ({
              ...prevState,
              [mailId]: !prevState[mailId],
            }));
          };
        
          const [showGuest, setShowGuest] = useState({});
        
        const toggleGuest = (mailId) => {
            setShowGuest((prevState) => ({
              ...prevState,
              [mailId]: !prevState[mailId],
            }));
          };

          const getguestText = (mailId) => {
            if (showGuest[mailId]) {
              return "Hide";
            } else {
              return "View";
            }
          };

          const getemgText = (mailId) => {
            if (showEmergency[mailId]) {
              return "Hide";
            } else {
              return "View";
            }
          };
        const navigate = useNavigate();
        
      
        const packageDetails = {
          1: {
            package_id: 1,
            name: "Serenity by the Sea: Pondicherry Getaway",
            image: img5,
            description:
              "Visit the quaint and charming union territory and experience its serene beaches and the spiritual aura of Auroville.",
            price: 25000,
            duration: "5 days, 4 nights",
            inclusions: {
              "Day 1": [
                "Arrive in Pondicherry and check into hotel or accommodation.",
                "Spend the afternoon exploring the French Quarter, also known as White Town.",
                "Visit historic streets like Rue Romain Rolland and enjoy the French architecture.",
                "Visit the Sri Aurobindo Ashram to experience its serene atmosphere.",
                "In the evening, enjoy a stroll along Promenade Beach and savor a delicious French dinner at a local restaurant.",
              ],
              "Day 2": [
                "Head to Auroville, an experimental township known for its spiritual and cultural pursuits.",
                "Explore the Matrimandir, a unique architectural marvel and meditation center.",
                "Return to Pondicherry and spend your afternoon at Paradise Beach, a serene and less crowded beach.",
                "Visit the Chunnambar Boat House for a boat ride or water sports.",
                "Enjoy a beachside dinner or explore local cafes.",
              ],
              "Day 3": [
                "Start your day with a visit to the Bharathi Park and Government Park.",
                "Explore the Aayi Mandapam, a beautiful white monument in the center of Bharathi Park.",
                "Visit the French War Memorial to pay respects to the soldiers.",
                "Discover the Pondicherry Museum and its collection of artifacts.",
                "In the evening, explore the Goubert Market for shopping and try some local street food.",
              ],
              "Day 4": [
                "Visit the nearby Pondicherry Botanical Garden, known for its lush greenery and exotic plant species.",
                "Enjoy a picnic lunch at the Botanical Garden or at a scenic spot by a lake.",
                "In the afternoon, head to Ousteri Lake, a serene wetland and bird-watching spot. Take a boat ride or enjoy the views.",
                "Return to Pondicherry and have a relaxed evening at the Promenade Beach.",
                "Group dinner at a beachfront restaurant to enjoy the sea breeze.",
              ],
              "Day 5": [
                "Morning visit to Serenity Beach for a yoga session or beach walk.",
                "Water sports activities for the adventurous travelers.",
                "Farewell lunch at a beachfront cafe.",
                "Check out from the hotel and depart, sharing memories of your wonderful trip.",
              ],
            },
          },
      
          2: {
            package_id: 2,
            name: "Golden Goa Getaway: Beaches and Beyond",
            image: img1,
            description:
              "Relax on the beautiful beaches of Goa and bask in the golden sunlight.",
            price: 30000,
            duration: "5 days, 4 nights",
            inclusions: {
              "Day 1": [
                "Arrive in Goa and check into hotel or accommodation.",
                "Spend the afternoon at your leisure on one of Goa's beautiful beaches.",
                "In the evening, explore the nearby markets and enjoy Goan cuisine at a local restaurant.",
              ],
              "Day 2": [
                "Visit Fort Aguada, a well-preserved 17th-century Portuguese fort with stunning ocean views.",
                "Explore the nearby Sinquerim Beach and indulge in water sports activities.",
                "Head to Calangute Beach for some beachside relaxation and water sports.",
                "Enjoy a beachfront dinner with live music and entertainment.",
              ],
              "Day 3": [
                "Explore the historic Old Goa, a UNESCO World Heritage Site with beautiful churches and cathedrals.",
                "Visit the Basilica of Bom Jesus, Sé Cathedral, and St. Augustine Tower.",
                "Take a cruise on the Mandovi River for scenic views and cultural performances.",
                "Sample Goan cuisine at a local restaurant known for its seafood dishes.",
              ],
              "Day 4": [
                "Discover the vibrant Anjuna Flea Market for shopping and local crafts.",
                "Head to Vagator Beach for a relaxed day by the sea.",
                "Explore the Chapora Fort, a historic site with panoramic views of the coastline.",
                "Enjoy a beachfront sunset with cocktails and live music.",
              ],
              "Day 5": [
                "Morning visit to Palolem Beach, known for its serene and picturesque beauty.",
                "Option for water sports or a boat trip to see dolphins in the Arabian Sea.",
                "Farewell lunch at a beach shack, savoring fresh seafood.",
                "Check out from the hotel and depart, carrying memories of your amazing Goa trip.",
              ],
            },
          },
          3: {
            package_id: 3,
            name: "Kerala Kaleidoscope: Culture, Cuisine, and Coastlines",
            image: img2,
            description:
              "Visit 'God's Own Country' known for its lush green landscapes, serene backwaters, pristine beaches, and rich cultural heritage.",
            price: 30000,
            duration: "5 days, 4 nights",
            inclusions: {
              "Day 1": [
                "Arrive in Kerala and check into hotel or accommodation.",
                "Spend the afternoon exploring the charming streets of Fort Kochi, known for its colonial architecture and cultural heritage.",
                "Visit the Chinese Fishing Nets along the shore and witness the sunset at Fort Kochi Beach.",
                "Enjoy traditional Kerala cuisine at a local restaurant.",
              ],
              "Day 2": [
                "Head to Munnar, a hill station known for its lush tea plantations and cool climate.",
                "Visit a tea plantation and tea museum to learn about tea production.",
                "Explore the Mattupetty Dam and take a boat ride on the tranquil lake.",
                "Enjoy a peaceful evening in the tea gardens with scenic views.",
              ],
              "Day 3": [
                "Discover the Periyar Wildlife Sanctuary in Thekkady and enjoy a guided jungle safari.",
                "Visit the Spice Plantations and learn about the spices that make Kerala famous.",
                "Explore the vibrant local market and shop for spices and souvenirs.",
                "Relax in the evening with a traditional Kathakali dance performance.",
              ],
              "Day 4": [
                "Head to Alleppey and embark on a backwater houseboat cruise through the serene Kerala backwaters.",
                "Enjoy the tranquil beauty of the backwaters, lush paddy fields, and coconut groves.",
                "Savor traditional Kerala meals served on the houseboat.",
                "Overnight stay on the houseboat with the sounds of nature as your backdrop.",
              ],
              "Day 5": [
                "Visit the beautiful Alleppey Beach for a morning walk and beachside relaxation.",
                "Experience a canoe ride through the narrow canals and witness local life along the backwaters.",
                "Farewell lunch on the houseboat with stunning backwater views.",
                "Check out and depart, taking with you memories of your unforgettable Kerala journey.",
              ],
            },
          },
          4: {
            package_id: 4,
            name: "Classical Cadence: Arts & Architecture in Chennai",
            image: img3,
            description:
              "Explore the bustling metropolis that seamlessly blends tradition with modernity.",
            price: 20000,
            duration: "5 days, 4 nights",
            inclusions: {
              "Day 1": [
                "Arrive in Chennai and check into hotel or accommodation.",
                "Visit Marina Beach, one of the longest urban beaches in the world, and enjoy a leisurely walk along the shore.",
                "Explore the historic San Thome Basilica, built over the tomb of St. Thomas the Apostle.",
                "Savor traditional South Indian cuisine at a local restaurant.",
              ],
              "Day 2": [
                "Discover the Kapaleeshwarar Temple, an iconic Dravidian-style temple dedicated to Lord Shiva.",
                "Visit the Government Museum and explore its rich collection of art, artifacts, and archaeological exhibits.",
                "Explore the vibrant Mylapore neighborhood, known for its cultural heritage and bustling streets.",
                "Enjoy a traditional Carnatic music performance in the evening.",
              ],
              "Day 3": [
                "Head to Mahabalipuram, a UNESCO World Heritage Site, and explore its ancient rock-cut temples and monuments.",
                "Visit the Shore Temple, Pancha Rathas, and Arjuna's Penance, showcasing intricate carvings and architecture.",
                "Relax on Mahabalipuram Beach and enjoy the coastal breeze.",
                "Savor seafood dishes at a beachfront restaurant.",
              ],
              "Day 4": [
                "Explore the bustling streets of Pondy Bazaar for shopping, local snacks, and street food.",
                "Visit the beautiful Birla Planetarium and learn about astronomy and space.",
                "Discover the historic Fort St. George, built by the British in the 17th century, and visit the Fort Museum.",
                "Enjoy a South Indian thali meal for lunch.",
              ],
              "Day 5": [
                "Head to Elliot's Beach and enjoy a morning walk along the serene coastline.",
                "Visit the Theosophical Society and explore its lush gardens and spiritual heritage.",
                "Explore Guindy National Park and its diverse flora and fauna.",
                "Farewell dinner at a fine dining restaurant, savoring Chennai's culinary delights.",
              ],
            },
          },
          5: {
            package_id: 5,
            name: "Hill Station Harmony: Ooty & Coonoor Duo",
            image: img4,
            description:
              "Dwell in the lush tea gardens, serene lakes, and cool climate of the 'Queen of Hill Stations'.",
            price: 25000,
            duration: "5 days, 4 nights",
            inclusions: {
              "Day 1": [
                "Arrive in Coimbatore and drive to Ooty, the 'Queen of Hill Stations.' Check into hotel or accommodation.",
                "Explore the scenic Ooty Lake and enjoy a boat ride with beautiful mountain views.",
                "Visit the lush Government Botanical Gardens with a variety of plant species.",
                "Savor local cuisine at a hill station restaurant.",
              ],
              "Day 2": [
                "Head to Coonoor, a neighboring hill station, and visit Sim's Park, a well-maintained botanical garden.",
                "Explore Dolphin's Nose viewpoint for stunning panoramic views of the Nilgiri Hills.",
                "Visit the tea estates and enjoy a tea factory tour to learn about tea processing.",
                "Return to Ooty and enjoy a traditional South Indian dinner.",
              ],
              "Day 3": [
                "Discover the Nilgiri Mountain Railway, a UNESCO World Heritage Site, and enjoy a scenic train ride through the hills.",
                "Explore the charming village of Lovedale and visit Lawrence School, one of India's renowned boarding schools.",
                "Spend the afternoon at the Rose Garden, admiring a variety of roses and other flowers.",
                "Enjoy a cozy evening by a bonfire at your accommodation.",
              ],
              "Day 4": [
                "Visit the picturesque Pykara Lake and enjoy a boat ride in the tranquil waters.",
                "Explore the Pykara Waterfalls and enjoy a picnic lunch by the waterfall.",
                "Head to the historic St. Stephen's Church, known for its colonial architecture.",
                "Savor a traditional Nilgiri meal at a local eatery.",
              ],
              "Day 5": [
                "Morning visit to the scenic Avalanche Lake for a serene experience in the lap of nature.",
                "Explore the Mukurthi National Park and witness the diverse wildlife and bird species.",
                "Farewell lunch at a hill station restaurant, savoring local dishes.",
                "Check out and depart from Ooty, carrying memories of your enchanting hill station journey.",
              ],
            },
          },
          6: {
            package_id: 6,
            name: "Garden Trails and Palace Sojourn: Exploring Bangalore & Mysore",
            image: img,
            description:
              "Embark on a mesmerizing journey with a captivating blend of modernity, culture, and heritage",
            price: 25000,
            duration: "5 days, 4 nights",
            inclusions: {
              "Day 1": [
                "Arrive in Bangalore and check into hotel or accommodation.",
                "Explore the bustling streets of Brigade Road and MG Road for shopping and dining.",
                "Visit Cubbon Park, a lush green space in the heart of the city, and admire the historic Attara Kacheri building.",
                "Savor a mix of street food and local cuisine at a traditional eatery.",
              ],
              "Day 2": [
                "Visit Lalbagh Botanical Garden, home to diverse plant species and a glasshouse inspired by London's Crystal Palace.",
                "Discover the historic Tipu Sultan's Summer Palace, a fine example of Indo-Islamic architecture.",
                "Explore the Bangalore Palace, a stunning royal residence with intricate architecture and artwork.",
                "Enjoy a dinner at a rooftop restaurant with city views.",
              ],
              "Day 3": [
                "Head to Mysore and check into your accommodation.",
                "Explore the grand Mysore Palace, a historic royal palace with stunning architecture.",
                "Visit the Chamundi Hill and climb the 1,000 steps to the Chamundeshwari Temple for panoramic views of Mysore.",
                "Savor traditional Mysore cuisine at a local restaurant.",
              ],
              "Day 4": [
                "Discover the Brindavan Gardens and witness the musical fountain show in the evening.",
                "Explore the St. Philomena's Church, known for its Neo-Gothic architecture and stained glass windows.",
                "Visit the Mysore Zoo and witness a variety of animals and bird species.",
                "Enjoy a relaxed evening at the Karanji Lake with birdwatching and boating.",
              ],
              "Day 5": [
                "Visit the Srirangapatna Island and explore the historic sites, including the Ranganathaswamy Temple and Tipu Sultan's Gumbaz.",
                "Explore the Mysore Arts and Crafts Center for local handicrafts and souvenirs.",
                "Farewell lunch at a traditional Mysore restaurant, savoring local dishes.",
                "Check out and depart from Mysore, carrying memories of your Bangalore and Mysore journey.",
              ],
            },
          },
        };
        const [custInfo, setCustInfo] = useState([])
        const [emgInfo, setEmgInfo] = useState([])
        const [guestInfo, setGuestInfo] = useState([])
      const packageId = logInDetails.package_id;
      const guideId = logInDetails.guide_id
      console.log('guideid is' + guideId)
        
        useEffect(() => {
          axios
            .get(`http://localhost:8080/upcomingtour-info`, {
              params: { guide_id: guideId },
            })
            .then((response) => {
              const tourData = response.data[0];
              setStartDate(tourData.start_date);
              setTourID(tourData.tour_id);
              setIsUpcoming(true);
            })
            .catch((error) => {
              console.error("Error fetching tour details:", error);
            });
        }, [guideId]);
        
        useEffect(() => {
          if (tourID) {
            axios
              .get(`http://localhost:8080/tourcust-info`, {
                params: { tour_id: tourID },
              })
              .then((response) => {
                const { cust_info, emg_info, guests_info } = response.data;
        
                setCustInfo(cust_info);
                setEmgInfo(emg_info);
                setGuestInfo(guests_info);
              })
              .catch((error) => {
                console.error("Error fetching customer details:", error);
              });
          }
        }, [tourID]);
        
      
        const selectedPackage = packageDetails[packageId];
        const { name, description, inclusions } = selectedPackage;
        const backgroundImageClass = "class" + packageId;
        console.log("package: ", selectedPackage);
        console.log(backgroundImageClass);
      
        if (!startDate){
          console.log('in else')
            return (
              <div>
                  <section className={`${backgroundImageClass} banner`}>
                  <div className="banner-content">
                      <h1>Welcome back {logInDetails.guide_fname} {logInDetails.guide_lname}!</h1>
                      
                  </div>
                  </section>
                  <header >
      <Navbar collapseOnSelect expand="lg" className={`navbar`}>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ fontSize: '22px' }}>
          <Nav.Link onClick={() => navigate("/guide-home")}>
                Ongoing Tours
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/accepted-tours")}>
                Accepted Tours
              </Nav.Link>
          </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
                  <div className="content">
                  <h4>No upcoming tours</h4>
                </div>

              </div>
                  
              );
            
              }

        if (isUpcoming) {
            
    
// Within your JSX

        if (!selectedPackage) {
          return <div>Package not found.</div>;
        }
        // const dateObject = new Date(startDate);
        // const date = dateObject.toLocaleString().split(",")[0];
      
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
    return (
    <div>
        <section className={`${backgroundImageClass} banner`}>
        <div className="banner-content">
            <h1>Welcome back {logInDetails.guide_fname} {logInDetails.guide_lname}!</h1>
        </div>
        </section>

        <header >
      <Navbar collapseOnSelect expand="lg" className={`navbar`}>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ fontSize: '22px' }}>
          <Nav.Link onClick={() => navigate("/guide-home")}>
                Ongoing Tours
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/accepted-tours")}>
                Accepted Tours
              </Nav.Link>
          </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
        <div className="content">


        {isUpcoming && (
          
        <div>
          <h6>Tour ID: {tourID}</h6>
          <h6>Tour Commencement: {formattedDate}</h6>
          <h6>Tour Duration: 5 days, 4 nights</h6>
          <br/>
        
    </div>
    )}
    </div>

    <div style={{margin: '30px'}}>
      <h4>Customer details</h4>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Mail ID</th>
            <th>Emergency Contact</th>
            <th>Guest Information</th>

          </tr>
        </thead>
        <tbody>
          {custInfo.map((customer, index) => (
            <tr key={index}>
              <td>{customer.cust_fname}</td>
              <td>{customer.cust_lname}</td>
              <td>{customer.age}</td>
              <td>{customer.gender}</td>
              <td>{customer.Phone_no}</td>
              <td>{customer.mail_id}</td>
              <td>
                <button onClick={() => toggleEmergency(customer.mail_id)}>
                  {getemgText(customer.mail_id)}
                </button>
              </td>
              <td>
                <button onClick={() => toggleGuest(customer.mail_id)}>
                  {getguestText(customer.mail_id)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {custInfo.map((customer, index) => (
        <div key={index}>
          {showEmergency[customer.mail_id] && (
            <div>
              <h3>Emergency Contact for {customer.cust_fname}</h3>
              {emgInfo
                .filter((emg) => emg.mail_id === customer.mail_id)
                .map((emg, index) => (
                  <div key={index}>
                    <p>{emg.fname} {emg.lname}</p>
                    <p>Relation: {emg.relation}</p>
                    <p>Age: {emg.Age}</p>
                    <p>Phone: {emg.phone_no}</p>
                    <p>Address: {emg.Address}</p>
                  </div>
                ))}
            </div>
          )}

          
        </div>

      ))}
    {custInfo.map((customer, index) => (
        <div key={index}>
          {showGuest[customer.mail_id] && (
            <div>
              <h3>Guest Information for {customer.cust_fname}</h3>
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
              {guestInfo
                .filter((guest) => guest.mail_id === customer.mail_id)
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
            </div>
          )}

          
        </div>
        
      ))}
    </div>

        
        
    </div>
        
    );
}



// else{
// console.log('in else')
//   return (
//     <div>
//         <section className={`${backgroundImageClass} banner`}>
//         <div className="banner-content">
//             <h1>{name}</h1>
//         </div>
//         </section>
//         <div className="content">
//         <p>No Ongoing Packages</p>
//     </div>  
//     </div>
        
//     );
  
//     }

  }

export default AcceptedTours;




