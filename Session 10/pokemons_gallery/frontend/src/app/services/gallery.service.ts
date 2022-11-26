import { Injectable } from '@angular/core';
import { Gallery } from '../gallery';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  galleries: Gallery[] = [
    {
      id: 1,
      name: 'My Collection',
      imageurn: '/mycollection',
      user_id: 1,
    },
    {
      id: 2,
      name: 'The Best',
      imageurn: '/thebest',
      user_id: 1,
    },
    {
      id: 3,
      name: 'Specials',
      imageurn: '/speacials',
      user_id: 1,
    },
    {
      id: 4,
      name: 'Pokie pokie',
      imageurn: '/pokiepokie',
      user_id: 2,
    },
    {
      id: 5,
      name: 'My list',
      imageurn: '/mylist',
      user_id: 2,
    },
    {
      id: 6,
      name: 'I love pikachu',
      imageurn: '/ilovepikachu',
      user_id: 2,
    },
    {
      id: 7,
      name: 'I love Pokemons',
      imageurn: '/ilovepokemons',
      user_id: 3,
    },
    {
      id: 8,
      name: 'My Second List',
      imageurn: '/mysecondlist',
      user_id: 3,
    },
    {
      id: 9,
      name: 'My First List',
      imageurn: '/myfirstList',
      user_id: 4,
    },
    {
      id: 10,
      name: 'My Animals',
      imageurn: '/myanimals',
      user_id: 4,
    },
  ];
  constructor() {}

  getGalleries() {
    return this.galleries;
  }
}
