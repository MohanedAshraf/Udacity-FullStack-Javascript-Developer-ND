CREATE TABLE IF NOT EXISTS contact_info (
    id SERIAL PRIMARY KEY,
    phoneNumber VARCHAR(50)   NOT NULL,
    address VARCHAR(150)   NOT NULL
);
