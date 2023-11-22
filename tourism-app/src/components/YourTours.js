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

const YourTours = ({ logInDetails }) => {
  const [startDate, setStartDate] = useState("");
  const [tourID, setTourID] = useState("");
  const [isOngoing, setIsOngoing] = useState(false);
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
        "Day 0": [
          "09:00 AM - Departure from Holiday Dreams Office",
          "02:00 PM - Arrival in Pondicherry and check-in at the hotel.",
          "03:30 PM - Orientation about the tour and the plan for the following days.",
        ],
        "Day 1": [
          "08:00 AM - Visit the historic streets of White Town, Rue Romain Rolland, and get a glimpse of French architecture.",
          "11:30 AM - Discover the spiritual vibes at the Sri Aurobindo Ashram.",
          "01:00 PM - Lunch at a local restaurant offering a mix of French and local cuisine.",
          "03:00 PM - Relaxing afternoon at Promenade Beach with group activities.",
          "08:00 PM - Group dinner at a traditional French-inspired restaurant.",
        ],
        "Day 2": [
          "07:00 AM - Meditation session at Auroville for a spiritual start.",
          "09:30 AM - Visit Matrimandir and explore its unique architecture and significance.",
          "12:30 PM - Lunch at a local community eatery inside Auroville.",
          "03:00 PM - Return to Pondicherry and relax at Paradise Beach, engaging in beach sports.",
          "06:00 PM - Explore local markets and street food.",
        ],
        "Day 3": [
          "07:00 AM - Begin your day at Bharathi Park and Government Park for a serene start.",
          "08:30 AM - Explore the Aayi Mandapam, a stunning white monument at the heart of Bharathi Park.",
          "10:00 AM - Pay homage at the French War Memorial, honoring the valor of soldiers.",
          "12:00 PM - Immerse in the historical narratives at Pondicherry Museum through its rich artifacts.",
          "03:30 PM - Delve into the bustling Goubert Market, a hub for shopping and savoring local street food.",
        ],
        "Day 4": [
          "08:00 AM - Begin your day at the Pondicherry Botanical Garden, a haven for diverse plant species. Take a leisurely stroll through the lush greenery and discover exotic flora.",

          "10:00 AM - Delight in a delightful picnic lunch either within the serene ambiance of the Botanical Garden or at a picturesque spot by a nearby lake. Unwind and savor the flavors amid nature's beauty.",

          "01:30 PM - Venture towards Ousteri Lake, a peaceful wetland known for bird-watching. Opt for a scenic boat ride or simply relish the tranquil natural vistas.",

          "04:30 PM - Return to Pondicherry and enjoy a serene evening at the iconic Promenade Beach. Take a leisurely walk or simply lounge by the sea, embracing the soothing ambiance.",

          "07:00 PM - Complete your day with a delightful group dinner at a beachfront restaurant. Indulge in the delectable cuisine while savoring the refreshing sea breeze.",
        ],
        "Day 5": [
          "06:30 AM - Start your day with a serene morning at Serenity Beach. Engage in a revitalizing yoga session by the seashore or opt for a refreshing beach walk to embrace the morning tranquility.",

          "09:00 AM - For the adventure seekers, explore various water sports activities offered at the beach. Delight in the adrenaline rush and the thrill of the sea.",

          "12:00 PM - Enjoy a delightful farewell lunch at a charming beachfront cafe. Relish the coastal cuisine while bidding adieu to the scenic surroundings.",

          "02:00 PM - Conclude your stay with a heart filled with memories of a wonderful trip. Check out from the hotel, carrying with you the cherished experiences and the magic of the coast.",
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
        "Day 0": [
          "09:00 AM - Departure from Holiday Dreams Office",
          "02:00 PM - Arrival in Pondicherry and check-in at the hotel.",
          "03:30 PM - Orientation about the tour and the plan for the following days.",
        ],
        "Day 1": [
          "11:00 AM - Arrival in Goa and check-in at your designated hotel or accommodation.",
          "02:00 PM - Relax and spend the afternoon at your leisure on one of Goa's beautiful beaches.",
          "06:00 PM - Stroll through nearby markets and savor Goan cuisine at a local restaurant.",
        ],

        "Day 2": [
          "09:00 AM - Visit Fort Aguada, a well-preserved 17th-century Portuguese fort with stunning ocean views.",
          "11:00 AM - Explore the nearby Sinquerim Beach and engage in water sports activities.",
          "02:00 PM - Head to Calangute Beach for some beachside relaxation and more water sports.",
          "07:00 PM - Enjoy a beachfront dinner with live music and entertainment.",
        ],

        "Day 3": [
          "09:00 AM - Explore the historic Old Goa, a UNESCO World Heritage Site with beautiful churches and cathedrals.",
          "11:00 AM - Visit the Basilica of Bom Jesus, Sé Cathedral, and St. Augustine Tower.",
          "02:00 PM - Take a cruise on the Mandovi River for scenic views and cultural performances.",
          "07:00 PM - Sample Goan cuisine at a local restaurant known for its seafood dishes.",
        ],

        "Day 4": [
          "10:00 AM - Discover the vibrant Anjuna Flea Market for shopping and exploring local crafts.",
          "01:00 PM - Head to Vagator Beach for a relaxed day by the sea.",
          "04:00 PM - Explore the Chapora Fort, a historic site with panoramic views of the coastline.",
          "06:00 PM - Enjoy a beachfront sunset with cocktails and live music.",
        ],

        "Day 5": [
          "09:00 AM - Morning visit to Palolem Beach, known for its serene and picturesque beauty.",
          "11:00 AM - Option for water sports or a boat trip to see dolphins in the Arabian Sea.",
          "01:00 PM - Farewell lunch at a beach shack, savoring fresh seafood.",
          "03:00 PM - Check out from the hotel and depart, carrying memories of your amazing Goa trip.",
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
        "Day 0": [
          "09:00 AM - Departure from Holiday Dreams Office",
          "02:00 PM - Arrival in Pondicherry and check-in at the hotel.",
          "03:30 PM - Orientation about the tour and the plan for the following days.",
        ],
        "Day 1": [
          "10:00 AM - Arrival in Kerala and check-in at the designated hotel or accommodation.",
          "01:00 PM - Exploration of the charming streets of Fort Kochi, known for its colonial architecture and cultural heritage.",
          "04:00 PM - Visit the Chinese Fishing Nets along the shore and witness the sunset at Fort Kochi Beach.",
          "07:00 PM - Enjoy traditional Kerala cuisine at a local restaurant.",
        ],

        "Day 2": [
          "09:00 AM - Travel to Munnar, a hill station known for its lush tea plantations and cool climate.",
          "11:00 AM - Visit a tea plantation and tea museum to learn about tea production.",
          "02:00 PM - Exploration of the Mattupetty Dam and a boat ride on the tranquil lake.",
          "06:00 PM - Enjoy a peaceful evening in the tea gardens with scenic views.",
        ],

        "Day 3": [
          "08:00 AM - Exploration of the Periyar Wildlife Sanctuary in Thekkady with a guided jungle safari.",
          "11:00 AM - Visit the Spice Plantations and learn about the spices that make Kerala famous.",
          "02:00 PM - Exploration of the vibrant local market, shopping for spices and souvenirs.",
          "06:00 PM - Relaxation in the evening with a traditional Kathakali dance performance.",
        ],

        "Day 4": [
          "09:00 AM - Travel to Alleppey and embark on a backwater houseboat cruise through the serene Kerala backwaters.",
          "11:00 AM - Enjoy the tranquil beauty of the backwaters, lush paddy fields, and coconut groves.",
          "01:00 PM - Savor traditional Kerala meals served on the houseboat.",
          "06:00 PM - Overnight stay on the houseboat with the sounds of nature as your backdrop.",
        ],

        "Day 5": [
          "08:00 AM - Visit the beautiful Alleppey Beach for a morning walk and beachside relaxation.",
          "11:00 AM - Experience a canoe ride through the narrow canals and witness local life along the backwaters.",
          "01:00 PM - Farewell lunch on the houseboat with stunning backwater views.",
          "03:00 PM - Check out and depart, taking with you memories of your unforgettable Kerala journey.",
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
        "Day 0": [
          "09:00 AM - Departure from Holiday Dreams Office",
          "02:00 PM - Arrival in Pondicherry and check-in at the hotel.",
          "03:30 PM - Orientation about the tour and the plan for the following days.",
        ],
        "Day 1": [
          "09:00 AM - Arrival in Chennai and check-in at the designated hotel or accommodation.",
          "11:00 AM - Visit Marina Beach, enjoying a leisurely walk along the shore, one of the longest urban beaches in the world.",
          "02:00 PM - Exploration of the historic San Thome Basilica, built over the tomb of St. Thomas the Apostle.",
          "07:00 PM - Relishing traditional South Indian cuisine at a local restaurant.",
        ],

        "Day 2": [
          "09:30 AM - Visit the iconic Dravidian-style Kapaleeshwarar Temple dedicated to Lord Shiva.",
          "11:30 AM - Exploration of the Government Museum, showcasing a rich collection of art, artifacts, and archaeological exhibits.",
          "02:00 PM - Exploration of the vibrant Mylapore neighborhood, known for its cultural heritage and bustling streets.",
          "06:00 PM - Enjoying a traditional Carnatic music performance in the evening.",
        ],

        "Day 3": [
          "09:00 AM - Travel to Mahabalipuram, a UNESCO World Heritage Site, and explore its ancient rock-cut temples and monuments.",
          "11:00 AM - Visit the Shore Temple, Pancha Rathas, and Arjuna's Penance, showcasing intricate carvings and architecture.",
          "01:00 PM - Relaxation at Mahabalipuram Beach, enjoying the coastal breeze.",
          "07:00 PM - Savoring seafood dishes at a beachfront restaurant.",
        ],

        "Day 4": [
          "10:00 AM - Exploration of the bustling streets of Pondy Bazaar for shopping, local snacks, and street food.",
          "12:00 PM - Visit the beautiful Birla Planetarium, learning about astronomy and space.",
          "02:00 PM - Exploration of the historic Fort St. George, built by the British in the 17th century. Visit the Fort Museum.",
          "04:30 PM - Enjoying a South Indian thali meal for lunch.",
        ],

        "Day 5": [
          "09:00 AM - Visit to Elliot's Beach for a morning walk along the serene coastline.",
          "11:00 AM - Exploration of the Theosophical Society, exploring its lush gardens and spiritual heritage.",
          "02:00 PM - Exploration of Guindy National Park, experiencing its diverse flora and fauna.",
          "07:00 PM - A farewell dinner at a fine dining restaurant, savoring Chennai's culinary delights.",
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
        "Day 0": [
          "09:00 AM - Departure from Holiday Dreams Office",
          "02:00 PM - Arrival in Pondicherry and check-in at the hotel.",
          "03:30 PM - Orientation about the tour and the plan for the following days.",
        ],
        "Day 1": [
          "07:00 AM - Arrive in Coimbatore, then proceed to the picturesque 'Queen of Hill Stations', Ooty. Check into hotel or chosen accommodation for a refreshing stay.",
          "09:30 AM - Visit the scenic Ooty Lake and indulge in a serene boat ride while soaking in the stunning mountain views.",
          "12:30 PM - Explore the lush Government Botanical Gardens, home to a diverse array of beautiful plant species.",
          "07:00 PM - Savor the flavors of the hills with a delightful meal at a local hill station restaurant.",
        ],
        "Day 2": [
          "08:00 AM - Head to the neighboring hill station, Coonoor. Begin the day at Sim's Park, a meticulously maintained botanical garden.",
          "11:00 AM - Enjoy the breathtaking panoramic views of the Nilgiri Hills from the Dolphin's Nose viewpoint.",
          "02:00 PM - Immerse in the tea estates and enjoy a captivating tour of a tea factory to learn the intricate art of tea processing.",
          "06:30 PM - Return to Ooty and relish a traditional South Indian dinner.",
        ],
        "Day 3": [
          "07:00 AM - Begin your day with a ride on the iconic Nilgiri Mountain Railway, a UNESCO World Heritage Site, for an enchanting journey through the hills.",
          "10:00 AM - Explore Lovedale, a charming village housing the renowned Lawrence School. Engage in the school's history and ambiance.",
          "02:00 PM - Take in the beauty of the Rose Garden, adorned with a vibrant collection of roses and other exquisite flowers.",
          "07:00 PM - Unwind and enjoy a cozy evening by a bonfire at accommodation.",
        ],
        "Day 4": [
          "08:00 AM - Embark on a serene boat ride on the picturesque Pykara Lake, surrounded by tranquility and natural beauty.",
          "11:00 AM - Experience the captivating Pykara Waterfalls and relish a delightful picnic lunch by the waterfall.",
          "03:00 PM - Visit the historic St. Stephen's Church, famed for its colonial architecture and rich heritage.",
          "07:00 PM - Delight in a traditional Nilgiri meal at a local eatery.",
        ],
        "Day 5": [
          "08:00 AM - Begin the day with a refreshing visit to the scenic Avalanche Lake, nestled in the lap of nature, offering serene surroundings.",
          "11:00 AM - Explore the diverse wildlife and bird species at Mukurthi National Park.",
          "01:00 PM - Enjoy a farewell lunch at a hill station restaurant, savoring local dishes before departure.",
          "04:00 PM - Conclude your enchanting journey through the hills of Ooty and journey back to office",
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
        "Day 0": [
          "09:00 AM - Departure from Holiday Dreams Office",
          "02:00 PM - Arrival in Pondicherry and check-in at the hotel.",
          "03:30 PM - Orientation about the tour and the plan for the following days.",
        ],
        "Day 1": [
          "09:00 AM - Arrival in Bangalore and check-in at the designated hotel or accommodation.",
          "11:00 AM - Exploration of the vibrant streets of Brigade Road and MG Road, enjoying shopping and dining experiences.",
          "02:00 PM - Visit to Cubbon Park, offering a serene experience amidst the city's hustle, with a focus on admiring the historic Attara Kacheri building.",
          "06:00 PM - Relishing a selection of street food and local cuisine at a traditional eatery.",
        ],
        "Day 2": [
          "09:30 AM - Visit to Lalbagh Botanical Garden, home to diverse plant species and a splendid glasshouse inspired by London's Crystal Palace.",
          "12:00 PM - Exploration of Tipu Sultan's Summer Palace, offering insights into Indo-Islamic architecture.",
          "03:00 PM - Visit to the exquisite Bangalore Palace showcasing stunning royal residence architecture and artwork.",
          "07:00 PM - Evening dinner at a rooftop restaurant, offering scenic city views.",
        ],
        "Day 3": [
          "09:00 AM - Departure to Mysore and check-in at the designated accommodation for the next part of the journey.",
          "11:00 AM - Exploration of the grand Mysore Palace, showcasing stunning architecture in the historic royal residence.",
          "02:00 PM - Visit to Chamundi Hill, involving climbing the 1,000 steps to the Chamundeshwari Temple for panoramic views of Mysore.",
          "07:00 PM - Enjoyment of traditional Mysore cuisine at a local restaurant.",
        ],
        "Day 4": [
          "09:30 AM - Visit to the Brindavan Gardens, enjoying the musical fountain show in the evening.",
          "12:00 PM - Exploration of St. Philomena's Church, revealing its Neo-Gothic architecture and stunning stained glass windows.",
          "03:00 PM - Visit to Mysore Zoo, offering a variety of animal and bird species for observation.",
          "06:00 PM - A relaxed evening at Karanji Lake, engaging in birdwatching and boating activities.",
        ],
        "Day 5": [
          "09:00 AM - Exploration of Srirangapatna Island, discovering historic sites including the Ranganathaswamy Temple and Tipu Sultan's Gumbaz.",
          "12:00 PM - Visit to Mysore Arts and Crafts Center for local handicrafts and souvenirs, a delightful experience.",
          "03:00 PM - Conclusion of the journey with a farewell lunch at a traditional Mysore restaurant, savoring local dishes before departure from Mysore.",
        ],
      },
    },
  };
  const [custInfo, setCustInfo] = useState([]);
  const [emgInfo, setEmgInfo] = useState([]);
  const [guestInfo, setGuestInfo] = useState([]);
  const packageId = logInDetails.package_id;
  const guideId = logInDetails.guide_id;
  console.log("guideid is" + guideId);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ongoingtour-info`, {
        params: { guide_id: guideId },
      })
      .then((response) => {
        const tourData = response.data[0];
        setStartDate(tourData.start_date);
        setTourID(tourData.tour_id);
        setIsOngoing(true);
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

  if (!startDate) {
    console.log("in else");
    return (
      <div>
        <section className={`${backgroundImageClass} banner`}>
          <div className="banner-content">
            <h1>
              Welcome back {logInDetails.guide_fname} {logInDetails.guide_lname}
              !
            </h1>
          </div>
        </section>
        <header>
          <Navbar collapseOnSelect expand="lg" className={`navbar`}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ fontSize: "22px" }}>
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
          <h4>No currently ongoing tours</h4>
        </div>
      </div>
    );
  }

  if (isOngoing) {
    const startDateObj = new Date(startDate);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - startDateObj.getTime();
    const differenceInDays =
      Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;

    const dayIndex = `Day ${differenceInDays}`;
    const ongoingDayDetails = inclusions[dayIndex];

    // Within your JSX

    if (!selectedPackage) {
      return <div>Package not found.</div>;
    }
    // const dateObject = new Date(startDate);
    // const date = dateObject.toLocaleString().split(",")[0];

    function getOrdinalIndicator(day) {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    const dateObject = new Date(startDate);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString("en-us", { month: "short" });
    const year = dateObject.getFullYear();

    const ordinalIndicator = getOrdinalIndicator(day);

    const formattedDate = `${month} ${day}${ordinalIndicator} ${year}`;

    console.log(formattedDate);
    return (
      <div>
        <section className={`${backgroundImageClass} banner`}>
          <div className="banner-content">
            <h1>
              Welcome back {logInDetails.guide_fname} {logInDetails.guide_lname}
              !
            </h1>
          </div>
        </section>

        <header>
          <Navbar collapseOnSelect expand="lg" className={`navbar`}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ fontSize: "22px" }}>
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
          {isOngoing && (
            <div>
              <h6>Tour ID: {tourID}</h6>
              <h6>Tour Commencement: {formattedDate}</h6>
              <h6>Tour Duration: 5 days, 4 nights</h6>
              <br />
              <h3>{dayIndex} Itinerary:</h3>

              {ongoingDayDetails && (
                <div>
                  {ongoingDayDetails.map((detail, index) => (
                    
                      <p key={index}>{detail}</p>
                    
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ margin: "30px" }}>
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
                        <p>
                          {emg.fname} {emg.lname}
                        </p>
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
};

export default YourTours;
