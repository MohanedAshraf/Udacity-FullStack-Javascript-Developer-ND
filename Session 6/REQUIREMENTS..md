## API Endpoints

## Users

- ### Create/Register
  - route: /api/users [POST]
- ### Authenticate/Login
  - route: /api/users/auth [POST]

## ContactInfo

- ### Create [token required]
  - route: /api/users/contactinfo [POST]
- ### Show [token required]
  - route: /api/users/contactinfo [GET]
- ### Update [token required]
  - route: /api/users/contactinfo [PUT]
- ### Delete [token required]
  - route: /api/users/contactinfo [DELETE]

## Pokemons

- ### Index
  - route: /api/pokemons [GET]
- ### Show
  - route: /api/pokemons/:id [GET]

## Galleries

- ### Index [token required]
  - route: /api/users/galleries [GET]
- ### Create [token required]
  - route: /api/users/galleries [POST]
- ### Show [token required]
  - route: /api/users/galleries/:id [GET]
- ### Delete [token required]
  - route: /api/users/galleries/:id [DELETE]
- ### AddPokemon [token required]
  - route: /api/users/galleries/:id/pokemons/:pokemon_id [POST]
- ### RemovePokemon [token required]
  - route: /api/users/galleries/:id/pokemons/:pokemon_id [DELETE]
