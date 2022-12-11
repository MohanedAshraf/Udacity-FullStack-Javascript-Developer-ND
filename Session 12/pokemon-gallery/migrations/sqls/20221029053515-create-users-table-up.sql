CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50)   NOT NULL,
    firstname VARCHAR(50)   NOT NULL,
    lastname VARCHAR(50)   NOT NULL,
    password text   NOT NULL,
    UNIQUE(username)
);