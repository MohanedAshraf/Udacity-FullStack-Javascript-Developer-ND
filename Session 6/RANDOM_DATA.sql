insert into users (username, firstname , lastname , password) values
('mohaz','mohaned' , 'Ashraf' ,'mohanedashraf'),
('ahmedzzz','ahmed' , 'mohamed' ,'1234512'),
('monaz','mona' , 'ahmed' ,'monas'),
('sayedzz','sayed' , 'Ashraf' ,'sayedsayed');


 insert into contact_info (user_id, phoneNumber, address) values
('1','01145906728' , 'cairo' ),
('2','01145931212' , 'mansoura' ),
('4','01145932389' , 'giza' ),
('3','01145903119' , 'alex' );


 insert into galleries (user_id, name, imageUrn) values
('1', 'My Special' , '/myspecial' ),
('2','My Collection' , '/mycollection' ),
('3','The Best' , '/the_best' ),
('1','I love them' , '/i_love_them' );


 insert into pokemons (name, type, imageUrn) values
('pikchu', 'electric' , '/electric' ),
('snorlex','normal' , '/snorlex' ),
('charmander','fire' , '/charmander' ),
('bulbasaur','grass' , '/bulbasaur' );


 insert into pokemons_galleries (gallery_id , pokemon_id) values
('1','2' ),
('1','3' ),
('1','4' ),
('1','4');


 insert into pokemons_galleries (gallery_id , pokemon_id) values
('2','2' ),
('2','3' ),
('2','3' ),
('2','2');


 insert into pokemons_galleries (gallery_id , pokemon_id) values
('3','4' ),
('3','4' ),
('3','4' ),
('3','4');

 insert into pokemons_galleries (gallery_id , pokemon_id) values
('4','1' ),
('4','2' ),
('4','3' ),
('4','4');