
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'friendship11';
FLUSH PRIVILEGES;

-- Show existing databases
SHOW DATABASES;
DROP DATABASE tourism;

CREATE DATABASE tourism;
-- Use the 'tourism' database
USE tourism;
DROP TABLE tour;
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

CREATE TABLE membership (
    membership_id INT AUTO_INCREMENT,
    type VARCHAR(15),
    Offers VARCHAR(50),
    CONSTRAINT PRIMARY KEY (membership_id)
);

CREATE TABLE guests (
    guest_fname VARCHAR(30),
    guest_lname VARCHAR(30),
    Age INT,
    mail_id VARCHAR(30)
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

CREATE TABLE transport_agency (
    vehicle_no INT,
    vehicle_type VARCHAR(25),
    driver_ssn VARCHAR(25),
    driver_name VARCHAR(30),
    driver_num VARCHAR(20),
    place_id VARCHAR(25),
    CONSTRAINT PRIMARY KEY (vehicle_no)
);


CREATE TABLE hotel (
    hotel_id INT,
    hotel_name VARCHAR(30),
    address VARCHAR(30),
    phone_no VARCHAR(20),
    CONSTRAINT PRIMARY KEY (hotel_id)
);


CREATE TABLE package_hotel (
    package_id INT,
    hotel_id INT
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


INSERT INTO guide (guide_fname, guide_lname, phone_no, package_id, mail_id, password) VALUES ('Bubs','Nee', '1234567890', '3', 'bubs@bubs.com', 'nee');



-- Insert data into the 'package' table
INSERT INTO package (package_id, price, place)
VALUES
    (1, 25000, 'Pondicherry'),
    (2, 30000, 'Goa'),
    (3, 30000, 'Kerala'),
    (4, 20000, 'Chennai'),
    (5, 25000, 'Ooty & Coonoor'),
    (6, 25000, 'Bangalore & Mysore');

insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (1, 'Claudie', 'Clementi', '3753105969', 3, 'cclementi0@illinois.edu', 'iD6k808');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (2, 'Raye', 'Meneur', '5252657292', 4, 'rmeneur1@dmoz.org', 'tH2lCjk(');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (3, 'Spense', 'Frail', '7514682262', 3, 'sfrail2@desdev.cn', 'yJ4Pfqu');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (4, 'Andrei', 'Keel', '2522409465', 4, 'akeel3@tiny.cc', 'jR22z.,+');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (5, 'Jud', 'O''Gleasane', '6505589366', 2, 'jogleasane4@last.fm', 'pB0grvcup');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (6, 'Kyrstin', 'Shortt', '8224517358', 3, 'kshortt5@techcrunch.com', 'aB63FG|');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (7, 'Reeta', 'Priestnall', '1177962957', 2, 'rpriestnall6@simplemachines.org', 'zA24}Z&@');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (8, 'Renelle', 'Megson', '4011657249', 5, 'rmegson7@google.es', 'jL1T38eU3');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (9, 'Marilyn', 'Corden', '6675841543', 5, 'mcorden8@over-blog.com', 'dV5o@xG)t>');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (10, 'Helene', 'O''Noulane', '1407407137', 2, 'honoulane9@slate.com', 'yV9v=cpr{');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (11, 'Cally', 'Croux', '6928741472', 3, 'ccrouxa@mlb.com', 'cL3UNJ0.');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (12, 'Anna-maria', 'Blackden', '6862817718', 4, 'ablackdenb@virginia.edu', 'eP95L%nMZ');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (13, 'Cristionna', 'Bowstead', '4088702879', 5, 'cbowsteadc@ted.com', 'kU2y"');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (14, 'Egor', 'McCaughey', '4782611215', 5, 'emccaugheyd@feedburner.com', 'lJ1\sTM{');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (15, 'Jacqui', 'Klamp', '8651553518', 5, 'jklampe@icio.us', 'yU3#bR');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (16, 'Rica', 'Tomasini', '5083198601', 3, 'rtomasinif@shop-pro.jp', 'tF8i''X)!w');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (17, 'Daryl', 'Lichfield', '7953282837', 1, 'dlichfieldg@squidoo.com', 'jY11?');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (18, 'Chilton', 'Qualtrough', '2769503488', 1, 'cqualtroughh@indiatimes.com', 'xL1FHH_a');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (19, 'Shandeigh', 'Skeermor', '2741138345', 5, 'sskeermori@last.fm', 'bJ2M)o"');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (20, 'Janeva', 'Condon', '5926778122', 6, 'jcondonj@google.de', 'hS7u5<3|M"');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (21, 'Othelia', 'Wybourne', '2948384385', 1, 'owybournek@ox.ac.uk', 'hF7v1,3,');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (22, 'Casi', 'Cheak', '3723004392', 1, 'ccheakl@ameblo.jp', 'pD2_uhdA');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (23, 'Saundra', 'Blaker', '3884304627', 3, 'sblakerm@upenn.edu', 'iL0H%VJZ#');
insert into guide (guide_id, guide_fname, guide_lname, phone_no, package_id, mail_id, password) values (24, 'Sanders', 'Lippo', '7672420662', 5, 'slippon@engadget.com', 'zE4YU*q~3');



insert into tour (numofpeople, start_date, end_date, package_id, tour_status) values(0, '2023-11-16', '2023-11-20', 1, 'Upcoming');
SELECT start_date from tour WHERE package_id = 1 AND tour_status = 'Upcoming';
insert into tour (numofpeople, start_date, end_date, package_id, tour_status) values(0, '2023-09-10','2023-09-14', 1, 'Completed');