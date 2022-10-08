import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing Pokemons Endpoints', () => {
  it('Testing if pikachu is exist', async () => {
    await request.get('/pokemons?filename=pikachu').expect(200);
  });
  it('Testing if dragon is exist', async () => {
    await request.get('/pokemons?filename=dragon').expect(404);
  });
});
