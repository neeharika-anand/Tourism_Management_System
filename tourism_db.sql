
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'friendship11';
FLUSH PRIVILEGES;

-- Show existing databases
SHOW DATABASES;
DROP DATABASE tourism;

CREATE DATABASE tourism;

-- Use the 'tourism' database
USE tourism;
DROP TABLE booking;
select * from guests;
-- Create tables
CREATE TABLE customer (
    cust_fname VARCHAR(25) NOT NULL,
    cust_lname VARCHAR(15) NOT NULL,
    age INT NOT NULL,
    gender ENUM('Male', 'Female', 'Others'),
    Phone_no VARCHAR(20),
    mail_id VARCHAR(30),
    password VARCHAR(25),
    membership_id VARCHAR(25),
    guide_id INT,
    CONSTRAINT PRIMARY KEY (mail_id)
);


CREATE TABLE guests (
    guest_fname VARCHAR(30),
    guest_lname VARCHAR(30),
    Age INT,
    mail_id VARCHAR(30),
    mobilenumber VARCHAR(30),
    booking_id INT
    
);
desc guests;

CREATE TABLE emergency_contact (
    emg_ssn INT AUTO_INCREMENT,
    fname VARCHAR(30),
    lname VARCHAR(30),
    relation VARCHAR(30),
    Age INT,
    phone_no VARCHAR(20),
    Address VARCHAR(50),
    mail_id VARCHAR(30),
    CONSTRAINT PRIMARY KEY (emg_ssn)
);

CREATE TABLE guide (
    guide_id INT AUTO_INCREMENT,
    guide_fname VARCHAR(30),
    guide_lname VARCHAR(30),
    phone_no VARCHAR(20),
	package_id INT,
    mail_id VARCHAR(100),
    password VARCHAR(25),
    CONSTRAINT PRIMARY KEY (guide_id)
);

CREATE TABLE booking (
    booking_id INT AUTO_INCREMENT,
    booking_date DATE,
    no_of_guests INT,
    mail_id VARCHAR(30),
    package_id INT,
    tour_id INT,
    CONSTRAINT PRIMARY KEY (booking_id)
);

CREATE TABLE package (
    package_id INT,
    price INT,
    place VARCHAR(20),
    CONSTRAINT PRIMARY KEY (package_id)
);

CREATE TABLE tour (
    tour_id INT AUTO_INCREMENT,
    numofpeople INT,
    start_date DATE,
    end_date DATE,
    tour_status ENUM('Upcoming', 'Ongoing', 'Completed'),
    guide_id INT,
    package_id INT,
    CONSTRAINT PRIMARY KEY (tour_id)
);
Drop table transport_agency;
CREATE TABLE transport_agency (
    vehicle_no VARCHAR(100),
    vehicle_type enum('Mini Van', 'Traveller', 'Bus'),
    driver_ssn VARCHAR(25),
    driver_name VARCHAR(30),
    driver_num VARCHAR(20),
    tour_id INT,
    CONSTRAINT PRIMARY KEY (vehicle_no)
);






-- Add foreign key constraints
ALTER TABLE guests ADD CONSTRAINT FOREIGN KEY (mail_id) REFERENCES customer (mail_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE emergency_contact ADD CONSTRAINT FOREIGN KEY (mail_id) REFERENCES customer (mail_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE customer ADD CONSTRAINT FOREIGN KEY (membership_id) REFERENCES membership (membership_id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE customer ADD CONSTRAINT FOREIGN KEY (guide_id) REFERENCES guide (guide_id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE booking ADD CONSTRAINT FOREIGN KEY (mail_id) REFERENCES customer (mail_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE booking ADD CONSTRAINT FOREIGN KEY (package_id) REFERENCES package (package_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE guide ADD CONSTRAINT FOREIGN KEY (package_id) REFERENCES package (package_id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE tour ADD CONSTRAINT FOREIGN KEY (package_id) REFERENCES package (package_id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE tour ADD CONSTRAINT FOREIGN KEY (guide_id) REFERENCES guide (guide_id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE transport_agency ADD CONSTRAINT FOREIGN KEY (package_id) REFERENCES package (package_id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE package_hotel ADD CONSTRAINT FOREIGN KEY (package_id) REFERENCES package (package_id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE package_hotel ADD CONSTRAINT FOREIGN KEY (hotel_id) REFERENCES hotel (hotel_id) ON DELETE CASCADE ON UPDATE CASCADE;



-- Insert data into the 'package' table
INSERT INTO package (package_id, price, place)
VALUES
    (1, 25000, 'Pondicherry'),
    (2, 30000, 'Goa'),
    (3, 30000, 'Kerala'),
    (4, 20000, 'Chennai'),
    (5, 25000, 'Ooty & Coonoor'),
    (6, 25000, 'Bangalore & Mysore');

-- Inserts for package_id = 1
INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES
('John', 'Doe', '1234567890', 1, 'john.doe@example.com', 'password123'),
('Alice', 'Smith', '9876543210', 1, 'alice.smith@example.com', 'password456');

-- Inserts for package_id = 2
INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES
('Bob', 'Johnson', '1112223333', 2, 'bob.johnson@example.com', 'password789'),
('Eva', 'Williams', '4445556666', 2, 'eva.williams@example.com', 'passwordabc');

-- Inserts for package_id = 3
INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES
('Charlie', 'Miller', '7778889999', 3, 'charlie.miller@example.com', 'passwordxyz'),
('Grace', 'Taylor', '3334445555', 3, 'grace.taylor@example.com', 'password123');

-- Inserts for package_id = 4
INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES
('Daniel', 'Brown', '5556667777', 4, 'daniel.brown@example.com', 'password456'),
('Olivia', 'Davis', '8889990000', 4, 'olivia.davis@example.com', 'password789');

-- Inserts for package_id = 5
INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES
('Edward', 'Hall', '2223334444', 5, 'edward.hall@example.com', 'passwordabc'),
('Sophia', 'Young', '9990001111', 5, 'sophia.young@example.com', 'passwordxyz');

-- Inserts for package_id = 6
INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES
('Frank', 'Ward', '6667778888', 6, 'frank.ward@example.com', 'password123'),
('Isabella', 'Adams', '1112223333', 6, 'isabella.adams@example.com', 'password456');


INSERT INTO transport_agency VALUES ('KA01AB1234', 'Mini Van', '123-45-6789', 'John Doe', '9876543210', NULL);
INSERT INTO transport_agency VALUES ('MH02CD5678', 'Traveller', '234-56-7890', 'Jane Smith', '8765432109', NULL);
INSERT INTO transport_agency VALUES ('TN03EF9012', 'Bus', '345-67-8901', 'Robert Johnson', '7654321098', NULL);
INSERT INTO transport_agency VALUES ('AP04GH2345', 'Mini Van', '456-78-9012', 'Emily Brown', '6543210987', NULL);
INSERT INTO transport_agency VALUES ('KA05IJ3456', 'Traveller', '567-89-0123', 'Michael Davis', '5432109876', NULL);
INSERT INTO transport_agency VALUES ('MH06KL4567', 'Bus', '678-90-1234', 'Sophia Wilson', '4321098765', NULL);
INSERT INTO transport_agency VALUES ('TN07MN5678', 'Mini Van', '789-01-2345', 'Daniel Miller', '3210987654', NULL);
INSERT INTO transport_agency VALUES ('AP08OP6789', 'Traveller', '890-12-3456', 'Olivia Taylor', '2109876543', NULL);
INSERT INTO transport_agency VALUES ('KA09QR7890', 'Bus', '901-23-4567', 'Ethan Anderson', '1098765432', NULL);
INSERT INTO transport_agency VALUES ('MH10ST8901', 'Mini Van', '012-34-5678', 'Ava Garcia', '9876543210', NULL);
INSERT INTO transport_agency VALUES ('TN11UV9012', 'Traveller', '123-45-6789', 'Liam Smith', '8765432109', NULL);
INSERT INTO transport_agency VALUES ('AP12WX1234', 'Bus', '234-56-7890', 'Emma Johnson', '7654321098', NULL);
INSERT INTO transport_agency VALUES ('KA13YZ2345', 'Mini Van', '345-67-8901', 'Noah Brown', '6543210987', NULL);
INSERT INTO transport_agency VALUES ('MH14AB3456', 'Traveller', '456-78-9012', 'Isabella Davis', '5432109876', NULL);
INSERT INTO transport_agency VALUES ('TN15CD4567', 'Bus', '567-89-0123', 'Aiden Wilson', '4321098765', NULL);
INSERT INTO transport_agency VALUES ('AP16EF5678', 'Mini Van', '678-90-1234', 'Mia Miller', '3210987654', NULL);
INSERT INTO transport_agency VALUES ('KA17GH6789', 'Traveller', '789-01-2345', 'James Taylor', '2109876543', NULL);
INSERT INTO transport_agency VALUES ('MH18IJ7890', 'Bus', '890-12-3456', 'Sophia Anderson', '1098765432', NULL);
INSERT INTO transport_agency VALUES ('TN19KL8901', 'Mini Van', '901-23-4567', 'Logan Garcia', '9876543210', NULL);
INSERT INTO transport_agency VALUES ('AP20MN9012', 'Traveller', '012-34-5678', 'Ava Smith', '8765432109', NULL);



DROP PROCEDURE CreateNextTourDate;

DELIMITER //

CREATE PROCEDURE CreateNextTourDate()
BEGIN
    DECLARE current_tour_id INT;
    DECLARE current_package_id INT;
    DECLARE new_tour_id INT;
    DECLARE current_start_date DATE;
    DECLARE new_start_date DATE;
	DECLARE new_end_date DATE;
    -- Fetch tour details for the upcoming tour that starts one day from now
    SELECT tour_id, package_id, start_date INTO current_tour_id, current_package_id, current_start_date
    FROM tour
    WHERE tour_status = 'Upcoming' AND start_date = DATE_ADD(CURDATE(), INTERVAL 1 DAY);

    -- Calculate the new end date for the tour (5 days from the new start date)
    SET new_start_date = DATE_ADD(current_start_date, INTERVAL 2 WEEK);
    SET new_end_date = DATE_ADD(new_start_date, INTERVAL 5 DAY);

-- Insert a new tour for the same package 2 weeks after the current tour's start date
INSERT INTO tour (numofpeople, start_date, end_date, tour_status, guide_id, package_id)
VALUES (0, new_start_date, new_end_date, 'Upcoming', NULL, current_package_id);
    -- Retrieve the last inserted ID, which will be the new tour's ID
    SET new_tour_id = LAST_INSERT_ID();

    -- Update the current tour to Ongoing status
    UPDATE tour
    SET tour_status = 'Ongoing'
    WHERE tour_id = current_tour_id;

END //

DELIMITER ;
DROP EVENT CheckTourDate;
DELIMITER //


DROP EVENT CheckTourDate;
CREATE EVENT IF NOT EXISTS CheckTourDate
ON SCHEDULE EVERY 1 MINUTE
DO
BEGIN
    DECLARE current_tour_id INT;
    DECLARE current_package_id INT;
    DECLARE new_tour_id INT;
    DECLARE new_start_date DATE;

    SELECT tour_id, package_id, start_date INTO current_tour_id, current_package_id, new_start_date
    FROM tour
    WHERE tour_status = 'Upcoming' AND start_date = DATE_ADD(CURDATE(), INTERVAL 1 DAY);

    IF current_tour_id IS NOT NULL THEN
        CALL CreateNextTourDate(); -- Ensure CreateNextTourDate is the name of the procedure.
        CALL AssignVehicleToTour(current_tour_id);
    END IF;
END //

DELIMITER ;



DELIMITER $$

CREATE TRIGGER reduce_tour_capacity
AFTER DELETE ON booking
FOR EACH ROW
BEGIN
    DECLARE guests_cancelled INT;
    DECLARE current_tour_capacity INT;
    DECLARE tour_id_to_update INT;

    -- Get the number of guests being canceled
    SET guests_cancelled = OLD.no_of_guests + 1;

    -- Get the current tour's capacity
    SELECT numofpeople INTO current_tour_capacity FROM tour WHERE tour_id = OLD.tour_id;

    -- Calculate the updated total capacity
    SET current_tour_capacity = current_tour_capacity - guests_cancelled;

    -- Ensure the minimum capacity is not negative
    IF current_tour_capacity < 0 THEN
        SET current_tour_capacity = 0;
    END IF;

    -- Update the tour with the reduced number of guests
    UPDATE tour SET numofpeople = current_tour_capacity WHERE tour_id = OLD.tour_id;
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE UpdateTourAndBooking(IN new_booking_id INT)
BEGIN
    DECLARE total_guests INT;
    DECLARE current_tour_capacity INT;
    DECLARE new_tour_id INT;
    DECLARE var_start_date DATE;
    DECLARE var_end_date DATE;
    DECLARE var_package_id INT;
    
    SELECT no_of_guests + 1 INTO total_guests FROM booking WHERE booking_id = new_booking_id;
    SELECT tour_id, package_id INTO new_tour_id, var_package_id FROM booking WHERE booking_id = new_booking_id;
    
    SELECT numofpeople INTO current_tour_capacity FROM tour WHERE tour_id = new_tour_id;
    SET current_tour_capacity = current_tour_capacity + total_guests;

    IF current_tour_capacity > 20 THEN
        SELECT start_date, end_date INTO var_start_date, var_end_date FROM tour WHERE tour_id = new_tour_id;

        INSERT INTO tour (numofpeople, start_date, end_date, tour_status, guide_id, package_id)
        VALUES (total_guests, var_start_date, var_end_date, 'Upcoming', NULL, var_package_id);
        SET new_tour_id = LAST_INSERT_ID();

        UPDATE booking SET tour_id = new_tour_id WHERE booking_id = new_booking_id;
    ELSE
        UPDATE tour SET numofpeople = current_tour_capacity WHERE tour_id = new_tour_id;
    END IF;
END$$

DELIMITER ;
DROP FUNCTION CalculateTourPrice;
DELIMITER $$
CREATE FUNCTION CalculateTotalPrice(
    numGuests INT,
    basePrice DECIMAL(10, 2)
) RETURNS DECIMAL(10, 2) deterministic
BEGIN
    DECLARE totalPrice DECIMAL(10, 2);
    DECLARE tax DECIMAL(10, 2);

    -- Calculate total price
    SET totalPrice = (numGuests + 1) * basePrice; -- Adding 1 for the base price
    
    -- Calculate tax
    SET tax = totalPrice * 0.18; -- 18% tax
    
    -- Add tax to the total price
    SET totalPrice = totalPrice + tax;
    
    RETURN totalPrice;
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE AssignVehicleToTour(tourId INT)
BEGIN
    DECLARE numberOfPeople INT;
    DECLARE vehicleTypeToAssign VARCHAR(100);

    -- Get the number of people for the given tour_id
    SELECT numofpeople INTO numberOfPeople FROM tour WHERE tour_id = tourId;

    -- Check the number of people and determine the vehicle type
    IF numberOfPeople <= 7 THEN
        SET vehicleTypeToAssign = 'Mini Van';
    ELSEIF numberOfPeople BETWEEN 8 AND 12 THEN
        SET vehicleTypeToAssign = 'Traveller';
    ELSE
        SET vehicleTypeToAssign = 'Bus';
    END IF;

    -- Assign the vehicle to the tour, only if it's unassigned (tour_id is NULL)
    UPDATE transport_agency
    SET tour_id = tourId
    WHERE tour_id IS NULL
        AND vehicle_type = vehicleTypeToAssign
    LIMIT 1; -- Limit to assign only one vehicle

END $$

DELIMITER ;
