CREATE TABLE pokemons_galleries (
    id SERIAL PRIMARY KEY,
    pokemon_id bigint REFERENCES pokemons(id),
    gallery_id bigint REFERENCES galleries(id)
);