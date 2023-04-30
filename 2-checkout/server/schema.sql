DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE userInfo (
    id INT AUTO_INCREMENT,
    user_name VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    user_password VARCHAR(20) NOT NULL,
    session_id VARCHAR(150) NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT session_id_constraint UNIQUE(session_id)
);

CREATE TABLE contactInfo (
     id INT AUTO_INCREMENT,
     user_id INT NOT NULL,
     user_address VARCHAR(50) NOT NULL,
     user_city VARCHAR(50) NOT NULL,
     user_state VARCHAR(50) NOT NULL,
     user_zipcode VARCHAR(50) NOT NULL,
     user_phonenumber VARCHAR(13) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES userInfo(id),
    CONSTRAINT user_id_constraint UNIQUE(user_id)
);

CREATE TABLE paymentInfo (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    creditcard_num VARCHAR(50) NOT NULL,
    expire_date VARCHAR(10) NOT NULL,
    cvv VARCHAR(3) NOT NULL, 
    billing_zipcode VARCHAR(10) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES userInfo(id),
    CONSTRAINT user_id_constraint UNIQUE(user_id)
);

