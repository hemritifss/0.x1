CREATE DATABASE drone_management;

USE drone_management;

CREATE TABLE drones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(255),
    serial_number VARCHAR(255),
    specifications TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE flights (
    id INT AUTO_INCREMENT PRIMARY KEY,
    drone_id INT,
    flight_time TIMESTAMP,
    status VARCHAR(255),
    issues TEXT,
    FOREIGN KEY (drone_id) REFERENCES drones(id)
);

CREATE TABLE weather_checks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    flight_id INT,
    weather_conditions TEXT,
    equipment_status TEXT,
    authorization BOOLEAN,
    FOREIGN KEY (flight_id) REFERENCES flights(id)
);
