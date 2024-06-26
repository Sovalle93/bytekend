CREATE DATABASE byteworks;

\c byteworks;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  role VARCHAR(25) NOT NULL,
  skill VARCHAR(25) NOT NULL,
  status VARCHAR(25) NOT NULL
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY,,
  firstname VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  role VARCHAR(25) NOT NULL,
  service VARCHAR(25) NOT NULL,
  CONSTRAINT service_not_null CHECK (service IS NOT NULL)
);

CREATE UNIQUE INDEX idx_business_firstname ON business (firstname);


CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  business_id INTEGER NOT NULL,
  role VARCHAR(255) NOT NULL,
  skill VARCHAR(255) NOT NULL,
  service VARCHAR(255) NOT NULL,
  CONSTRAINT fk_jobs_business FOREIGN KEY (business_id) REFERENCES business (id)
);


SELECT * FROM ;
