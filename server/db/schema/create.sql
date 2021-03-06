DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS airports CASCADE;
DROP TABLE IF EXISTS flights CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(255)
)

CREATE TABLE airports (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  latitude DECIMAL NOT NULL,
  longitude DECIMAL NOT NULL
)

CREATE TABLE flights (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  time TIMESTAMP,
  destination INTEGER REFERENCES airports(id) ON DELETE CASCADE,
  origin INTEGER REFERENCES airports(id) ON DELETE CASCADE
)

CREATE TABLE favorited_chats(
  id SERIAL PRIMARY KEY NOT NULL,
  room_id VARCHAR(255) NOT NULL,
  user_id VARCHAR NOT NULL,
  text VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
 address_street VARCHAR(255),
 address_city VARCHAR(255),
 address_state VARCHAR(255),
 address_zipcode VARCHAR(255),
 display_phone VARCHAR(255),
 rating VARCHAR(255)
);

CREATE TABLE favorited_chats_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
