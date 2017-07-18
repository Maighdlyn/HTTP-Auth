-- DROP DATABASE IF EXISTS http_auth;
CREATE DATABASE http_auth;

\c http_auth

DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username TEXT
);
