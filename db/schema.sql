DROP DATABASE IF EXISTS hookah_db;

CREATE DATABASE hookah_db;

USE hookah_db;

CREATE TABLE tables(
    id INT NOT NULL,
    guest_name VARCHAR(150) NOT NULL,
    party_size INT NOT NULL,
    res_date INT NOT NULL,
    res_time INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product(
    id INT NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    product_type VARCHAR(150) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (id)
);



