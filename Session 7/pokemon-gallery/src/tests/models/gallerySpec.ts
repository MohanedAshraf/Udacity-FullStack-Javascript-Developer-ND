import client from '../../database';
import { Gallery, GalleryModel } from '../../models/Gallery';
import { Pokemon, PokemonModel } from '../../models/Pokemon';
import { User, UserModel } from '../../models/User';

const galleryModel = new GalleryModel();
const userModel = new UserModel();
const baseGallery: Gallery = {
  user_id: 0,
  name: 'myCollection',
  imageurn: '/myCollection',
};

let gallery: Gallery;
let user: User;
let pokemon: Pokemon;

describe('Testing Model: Gallery', () => {
  beforeAll(async () => {
    user = await userModel.create({
      username: 'moha',
      firstname: 'mohaned',
      lastname: 'ashraf',
      password: '123',
    });
    if (user.id) baseGallery.user_id = Number(user.id);

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
  it('Must have a create method', () => {
    expect(galleryModel.create).toBeDefined();
  });

  it('Testing gallery create method', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    gallery = await galleryModel.create(baseGallery);

    expect({
      user_id: Number(gallery.user_id),
      name: gallery.name,
      imageurn: gallery.imageurn,
    }).toEqual({
      user_id: baseGallery.user_id,
      name: baseGallery.name,
      imageurn: baseGallery.imageurn,
    });
  });

  it('Must have an index method', () => {
    expect(galleryModel.index).toBeDefined();
  });

  it('Testing gallery index method to return galleries that belong to user', async () => {
    const galleries = await galleryModel.index(user.id as unknown as number);
    expect(galleries).toContain(gallery);
  });

  it('Must have a show method', () => {
    expect(galleryModel.show).toBeDefined();
  });

  it('Testing the show model to return a gallery taht belongs to user', async () => {
    const foundGallery = await galleryModel.show(
      gallery.id as number,
      gallery.user_id
    );
    expect(foundGallery).toEqual(gallery);
  });

  it('Must have an addPokemon method', () => {
    expect(galleryModel.addPokemon).toBeDefined();
  });

  it('Testing add pokemon method to return the data of join Table pokemons_galleries', async () => {
    const addedPokemon: any = await galleryModel.addPokemon(
      gallery.id as number,
      pokemon.id as number
    );
    expect(Number(addedPokemon.gallery_id)).toEqual(gallery.id as number);
    expect(Number(addedPokemon.pokemon_id)).toEqual(pokemon.id as number);
  });

  it('Must have a removePokemon method', () => {
    expect(galleryModel.removePokemon).toBeDefined();
  });

  it('Testing removing pokemon method to return the data of removed pokemon from pokemons_galleries', async () => {
    const removedPokemon: any = await galleryModel.removePokemon(
      gallery.id as number,
      pokemon.id as number
    );
    expect(Number(removedPokemon.gallery_id)).toEqual(gallery.id as number);
    expect(Number(removedPokemon.pokemon_id)).toEqual(pokemon.id as number);
  });

  it('Must have a delete method', () => {
    expect(galleryModel.delete).toBeDefined();
  });

  it('Testing the delete method to return the deleted gallery', async () => {
    const deletedGallery = await galleryModel.delete(
      gallery.id as number,
      gallery.user_id
    );
    expect(deletedGallery.id).toEqual(gallery.id);
  });
});
