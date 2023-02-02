create database ng_schools_db;
use ng_schools_db;
create table student (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (100),
    lastName VARCHAR(100),
    photo VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
