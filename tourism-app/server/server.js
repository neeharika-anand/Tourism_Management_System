

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "friendship11",
  database: "tourism",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(express.json());
app.post("/register", (req, res) => {
  const userData = req.body;
  const newUser = userData.newUser;

  const customer_register = `
    INSERT INTO customer (cust_fname, cust_lname, age, gender, Phone_no, mail_id, password)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const emergency_register = `
    INSERT INTO emergency_contact (fname, lname, relation, Age, phone_no, Address, mail_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const customer_reg = [
    newUser.fname,
    newUser.lname,
    newUser.age,
    newUser.gender,
    newUser.phone,
    newUser.email,
    newUser.password,
  ];

  const emergency_reg = [
    newUser.emergencyContact.fname,
    newUser.emergencyContact.lname,
    newUser.emergencyContact.relation,
    newUser.emergencyContact.age,
    newUser.emergencyContact.phone,
    newUser.emergencyContact.address,
    newUser.email,
  ];

  connection.query(customer_register, customer_reg, (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log("Data inserted into the database");
    }
  });

  connection.query(emergency_register, emergency_reg, (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
    } else {
      console.log("Data inserted into the database");
    }
  });

  console.log(userData);
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const retrieve = `SELECT * FROM customer WHERE mail_id = ? AND password = ?`;

  connection.query(retrieve, [email, password], (err, rows) => {
    if (err) {
      console.log("Error:", err);
      res.status(500).json({ error: "Database query error" });
    } else if (rows.length > 0) {
      console.log("Success");
      console.log(rows);
      res.json({ rows: rows });
    } else {
      console.log("Invalid password");
      res.json({ message: "Invalid email or password" });
    }
  });
});

app.post("/guide-login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const retrieve = `SELECT * FROM guide WHERE mail_id = ? AND password = ?`;

  connection.query(retrieve, [email, password], (err, rows) => {
    if (err) {
      console.log("Error:", err);
      res.status(500).json({ error: "Database query error" });
    } else if (rows.length > 0) {
      console.log("Success");
      console.log(rows);
      res.json({ rows: rows });
    } else {
      console.log("Invalid password");
      res.json({ message: "Invalid email or password" });
    }
  });
});

// app.post("/booking", (req, res) => {
//   const guestsData = req.body.guestsData;
//   console.log(guestsData);
//   const bookinginfo = req.body.bookinginfo;
//   console.log(bookinginfo);
//   // Insert data into the purchase table

//   connection.query(
//     "INSERT INTO booking(booking_date, mail_id, package_id, tour_id) VALUES (?, ?, ?, ?)",
//     [bookinginfo.date, bookinginfo.email, bookinginfo.packageID, bookinginfo.tourID],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ error: "Failed to create booking" });
//       }
//       console.log("succesfully inserted into booking");

//       const guestsItemsData = guestsData.map((item) => [
//         item.firstName,
//         item.lastName,
//         parseInt(item.Age),
//         bookinginfo.email,
//       ]);
//       console.log(guestsItemsData);
//       connection.query(
//         "INSERT INTO guests VALUES ?",
//         [guestsItemsData],
//         (err) => {
//           if (err) {
//             console.log(err);
//             return res
//               .status(500)
//               .json({ error: "Failed to add guests" });
//           }

//           // Success response
//           res.json({ message: "Booking created successfully" });
//         }
//       );
//     }
//   );
// });

app.post("/booking", (req, res) => {
  const guestsData = req.body.guestsData;
  const bookinginfo = req.body.bookinginfo;
  const guestlength = req.body.guestlength;
  

  connection.query(
    "INSERT INTO booking(booking_date, no_of_guests, mail_id, package_id, tour_id) VALUES (?, ?, ?, ?, ?)",
    [
      bookinginfo.date,
      guestlength,
      bookinginfo.email,
      bookinginfo.packageID,
      bookinginfo.tourID
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to create booking" });
      }

      // Retrieve the last inserted booking_id
      if (guestlength){
        connection.query(
        "SELECT booking_id FROM booking ORDER BY booking_id DESC LIMIT 1",
        (err, rows) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .json({ error: "Failed to retrieve booking ID" });
          }

          const bookingId = rows[0].booking_id;

          

          const guestsItemsData = guestsData.map((item) => [
            item.firstName,
            item.lastName,
            parseInt(item.Age),
            bookinginfo.email,
            item.mobilenumber,
            bookingId, // Use the last inserted booking ID for the guests
          ]);

          connection.query(
            "INSERT INTO guests VALUES ?",
            [guestsItemsData],
            (err) => {
              if (err) {
                console.log(err);
                return res.status(500).json({ error: "Failed to add guests" });
              }
              connection.query(
                "CALL UpdateTourAndBooking(?)",
                [bookingId],
                (err) => {
                  if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Failed to add guests" });
                  }
                  res.json({ message: "Booking created successfully" });
                }
                
              );
              
            }
            
          );
        }
      );}
      else{
        connection.query(
          "SELECT booking_id FROM booking ORDER BY booking_id DESC LIMIT 1",
          (err, rows) => {
            if (err) {
              console.log(err);
              return res
                .status(500)
                .json({ error: "Failed to retrieve booking ID" });
            }
  
            const bookingId = rows[0].booking_id;
  
            connection.query(
              "CALL UpdateTourAndBooking(?)",
              [bookingId],
              (err) => {
                if (err) {
                  console.log(err);
                  return res.status(500).json({ error: "Failed to add guests" });
                }
                
                
              }
              
            );
          }
        );
      }
    }
  );
});

app.get("/tour-info", (req, res) => {
  const { package_id } = req.query;

  console.log('in tour info'+ package_id)

 // const intPackageID = parseInt(package_id);
  const query = `SELECT tour_id, start_date FROM tour WHERE package_id = ? AND tour_status = 'Upcoming' ORDER BY tour_id DESC`;

  connection.query(query, [package_id], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(results);
    res.status(200).json(results);
  });
});

app.get("/booking-info", (req, res) => {
  console.log("entered booking-info");
  const { mail_id } = req.query;
  console.log(mail_id);
  const query = `SELECT 
  b.booking_id, b.booking_date, t.package_id, t.start_date, t.end_date, t.guide_id, t.tour_id
  FROM 
    tour t 
  JOIN
    booking b
  ON 
    t.tour_id = b.tour_id 
  WHERE 
    b.mail_id = ? AND (t.tour_status ='Upcoming' OR t.tour_status ='Ongoing');`;
  connection.query(query, [mail_id], (error1, results1) => {
    if (error1) {
      console.log(error1);
      console.error("Error executing SQL query:", error1);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const bookingIds = results1.map((item) => item.booking_id);
    console.log(results1);
    if (bookingIds.length === 0){
      console.log('no packages booked')
    
    }
    const query1 = `SELECT * FROM guests where booking_id IN (?)`;

    connection.query(query1, [bookingIds], (error2, results2) => {
      if (error2) {
        console.log(error2);
        console.error("Error executing SQL query:", error2);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log("results 2" + JSON.stringify(results2));
      const results = {
        bookingData: results1,
        guestData: results2,
      };
      console.log(results);
      res.status(200).json(results);
    });
  });
});

app.get("/booking-history", (req, res) => {
  console.log("entered booking-history");
  const { mail_id } = req.query;
  console.log(mail_id);
  const query = `SELECT 
  b.booking_id, b.booking_date, t.package_id, t.start_date, t.end_date, t.guide_id
  FROM 
    tour t 
  JOIN
    booking b
  ON 
    t.tour_id = b.tour_id 
  WHERE 
    b.mail_id = ? AND t.tour_status ='Completed' `;
  connection.query(query, [mail_id], (error1, results1) => {
    if (error1) {
      console.log(error1);
      console.error("Error executing SQL query:", error1);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const bookingIds = results1.map((item) => item.booking_id);
    console.log(results1);
    if (bookingIds.length === 0){
      console.log('no packages booked')
    
    }
    const query1 = `SELECT * FROM guests where booking_id IN (?)`;

    connection.query(query1, [bookingIds], (error2, results2) => {
      if (error2) {
        console.log(error2);
        console.error("Error executing SQL query:", error2);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log("results 2" + JSON.stringify(results2));
      const results = {
        bookingData: results1,
        guestData: results2,
      };
      console.log(results);
      res.status(200).json(results);
    });
  });
});

app.post("/delete-booking", (req, res) => {
  console.log('in delete booking'+ JSON.stringify(req.body))
  const { bookingid } = req.body;
console.log(bookingid)
  connection.query(
    "DELETE FROM booking WHERE booking_id = ?",
    [bookingid],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to delete booking" });
      }
      console.log('booking deleted')
      // Retrieve the last inserted booking_id
      connection.query(
        "DELETE FROM guests WHERE booking_id = ?",
        [bookingid],
        (err, rows) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .json({ error: "Failed to retrieve booking ID" });
          }
 
          res.json({ message: "Booking deleted successfully" });
        }
      );
    }
  );
});
app.get("/available-tours", (req, res) => {
  
  const packageID  = req.query.packageID;
  console.log('in server package'+ packageID)
  const guideID = req.query.guideID;
  console.log('in server guide'+guideID)
  const query = `SELECT * FROM tour where package_id = ? AND tour_status = 'Upcoming' AND guide_id IS NULL
  AND start_date NOT IN( SELECT start_date FROM tour where guide_id = ?)`;

  

  connection.query(query, [packageID, guideID], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(results);
    res.status(200).json(results);
  });
});

app.post("/accept-tour", (req, res) => {
  console.log('in accept tour'+ JSON.stringify(req.body))
  const tourID = req.body.tourID;
  const guideID = req.body.guideID;
  console.log(tourID)
  console.log(guideID)
  connection.query(
    "UPDATE tour SET guide_id = ? WHERE tour_id = ?",
    [guideID, tourID],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to update guide" });
      }
      console.log('guide updated')
      res.json({ message: "Booking created successfully" });
    }
  );
});

app.get("/ongoingtour-info", (req, res) => {
  
  const { guide_id} = req.query;
  console.log('guideid'+guide_id)
  const query = `SELECT tour_id, start_date FROM tour WHERE guide_id = ? AND tour_status = 'Ongoing'`;

  connection.query(query, [guide_id], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(results);
    res.status(200).json(results);
  });
});

app.get("/upcomingtour-info", (req, res) => {
  
  const { guide_id} = req.query;
  console.log('guideid'+guide_id)
  const query = `SELECT tour_id, start_date FROM tour WHERE guide_id = ? AND tour_status = 'Upcoming'`;

  connection.query(query, [guide_id], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(JSON.stringify(results));
    res.status(200).json(results);
  });
});

app.get("/tourcust-info", (req, res) => {
  
  const {tour_id} = req.query;
  console.log('tourid'+tour_id)
  const query = `SELECT mail_id FROM booking WHERE tour_id = ?`;

  connection.query(query, [tour_id], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const mails = results.map((item) => item.mail_id);
    //const bookingid = results.map((item) => item.booking_id);
    console.log('tour'+results);
    const query1 = `SELECT * FROM customer where mail_id IN (?)`;


    connection.query(query1, [mails], (error1, results1) => {
      if (error1) {
        console.log(error1);
        console.error("Error executing SQL query:", error1);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log('customer'+ JSON.stringify(results1));


      const query2 = `SELECT * FROM emergency_contact where mail_id IN (?)`;
      connection.query(query2, [mails], (error2, results2) => {
        if (error2) {
          console.log(error2);
          console.error("Error executing SQL query:", error2);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log('emg_contact'+ JSON.stringify(results2));


        const query3 = `SELECT *
        FROM guests
        WHERE booking_id IN (
            SELECT booking_id
            FROM booking
            WHERE tour_id = ? 
            AND mail_id IN (?)
        )`;
      connection.query(query3, [tour_id,mails], (error3, results3) => {
        if (error3) {
          console.log(error3);
          console.error("Error executing SQL query:", error3);
          return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log('guests'+ JSON.stringify(results3));
        
        const final = {
          cust_info: results1,
          emg_info: results2,
          guests_info: results3
        }
      console.log('final'+ JSON.stringify(final));
      res.status(200).json(final);
      });
      });

    });
  });
});

app.get('/calculateTourPrice', (req, res) => {
  const guestlength = req.query.guestlength
  const basePrice = req.query.basePrice
  console.log('g'+guestlength)
  console.log('b'+basePrice)
  
  // Perform any necessary validation on the incoming data

  // Perform SQL function call with the provided data
  const sql = `SELECT CalculateTotalPrice(?, ?) as totalPrice`;
  connection.query(sql, [guestlength, basePrice], (error, results) => {
    if (error) {
      console.error('Error executing SQL function:', error);
      res.status(500).send('Error calculating total price');
      return;
    }
    console.log('results'+ JSON.stringify(results))
    console.log('results[0]'+results[0].totalPrice)
    res.status(200).json({ totalPrice: results[0].totalPrice });
  });
});

app.get('/popular-package', (req, res) => {
  
  const sql = `SELECT package_id, COUNT(package_id) AS total_bookings
  FROM booking
  GROUP BY package_id
  ORDER BY total_bookings DESC
  LIMIT 1`
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing SQL function:', error);
      res.status(500).send('Error calculating total price');
      return;
    }
    console.log('results'+ JSON.stringify(results))
    console.log('results[0]'+results[0].package_id)
    res.status(200).json({ package_id: results[0].package_id});
  });
});


app.get("/no-booking", (req, res) => {
  const {packageID} = req.query;
  const query = `SELECT tour_id
  FROM tour WHERE package_id = ?
  EXCEPT
  SELECT DISTINCT tour_id
  FROM booking`;

  connection.query(query, [packageID],(error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log(results);
    res.status(200).json(results);
  });
});

app.get("/vehicle-info", (req, res) => {
  const {tourID} = req.query;
  console.log('in vehicle infor'+ tourID)
  const query = `SELECT * FROM transport_agency where tour_id = ?`;

  connection.query(query, [tourID],(error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log('vehicle'+JSON.stringify(results));
    res.status(200).json(results);
  });
});

app.listen(8080, () => {

  console.log("Server is running on port 8080");
});