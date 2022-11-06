
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50)   NOT NULL,
    firstname VARCHAR(50)   NOT NULL,
    lastname VARCHAR(50)   NOT NULL,
    password text   NOT NULL,
    UNIQUE(username)
);


CREATE TABLE IF NOT EXISTS contact_info (
    id SERIAL PRIMARY KEY,
    phonenumber VARCHAR(50)   NOT NULL,
    address VARCHAR(150)   NOT NULL
);

ALTER TABLE contact_info ADD COLUMN user_id  bigint UNIQUE REFERENCES users(id);
 

CREATE TABLE IF NOT EXISTS galleries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)   NOT NULL,
    imageurn VARCHAR(255)   NOT NULL
);


ALTER TABLE galleries ADD COLUMN user_id  bigint REFERENCES users(id);
 

CREATE TABLE IF NOT EXISTS pokemons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)   NOT NULL,
    type VARCHAR(50)  NOT NULL,
    imageurn VARCHAR(255)   NOT NULL
);


CREATE TABLE pokemons_galleries (
    id SERIAL PRIMARY KEY,
    pokemon_id bigint REFERENCES pokemons(id),
    gallery_id bigint REFERENCES galleries(id)
);
