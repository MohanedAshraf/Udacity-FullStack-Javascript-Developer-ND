import { Pokemon, PokemonModel } from '../../models/Pokemon';
import client from '../../database';

const pokemonModel = new PokemonModel();

let pokemon: Pokemon;

describe('Testing Model: Pokemon', () => {
  // beacuse we don't have create method we should insert at least one pokemon to test the model
  beforeAll(async () => {
    const connection = await client.connect();
    const sql =
      'insert into pokemons (name, type, imageurn) values(($1), ($2) , ($3)) RETURNING *';
    const result = await connection.query(sql, [
      'pikchu',
      'electric',
      '/electric',
    ]);
    pokemon = result.rows[0];
    connection.release();
  });

  it('Must have a show method', () => {
    expect(pokemonModel.show).toBeDefined();
  });

  it('Testing the show model to return the pokemon with id', async () => {
    const foundPokemon = await pokemonModel.show(pokemon.id as number);
    expect(foundPokemon).toEqual(pokemon);
  });

  it('Must have an index method', () => {
    expect(pokemonModel.index).toBeDefined();
  });

  it('Testing the index model to include the pokemon', async () => {
    const pokemons = await pokemonModel.index();
    expect(pokemons).toContain(pokemon);
  });
});
