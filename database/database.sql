create database ng_schools_db;
use ng_schools_db;
create table student(
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (100),
    lastName VARCHAR(100),
    photo VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE matters(
    idMatter INT (11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nameMatter VARCHAR(100)
);

----Tabla maestro detalle

CREATE TABLE Student_Matters(
    id INT,
    idMatter INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES student(id),
    FOREIGN KEY (idMatter) REFERENCES matters(idMatter)
);