CREATE TABLE IF NOT EXISTS galleries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)   NOT NULL,
    imageUrn VARCHAR(255)   NOT NULL
);
