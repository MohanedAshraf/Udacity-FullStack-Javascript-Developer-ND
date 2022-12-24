insert into users (username, firstname , lastname , password) values
('mohaz','mohaned' , 'Ashraf' ,'$2b$12$2pfT4tAzZyAkkAcTKQO9FOv0FzmW0iyFHck1hixrLAs.6Bya21IMC'), /* Original password (mohanedashraf) */
('ahmedzzz','ahmed' , 'mohamed' ,'$2b$12$d33WZE9A8YGmxlqXNYNXMeGdcDUKwwJdPyXGjj4w9LDZZmd8DMlr6'), /* Original password (1234512) */
('monaz','mona' , 'ahmed' ,'$2b$12$tYvVFWbnThjr5idE19NJiukqatNoGYOmKPB2w4ya.4Jk8Lo7/gw8W'), /* Original password (monas) */
('sayedzz','sayed' , 'Ashraf' ,'$2b$12$KT3csIhTlyisfDCm2dHzwuab5lZf09U/85U63Ip7A3aHTGxyNaDxq'); /* Original password (sayedsayed) */


 insert into contact_info (user_id, phonenumber, address) values
('1','01145906728' , 'cairo' ),
('2','01145931212' , 'mansoura' ),
('4','01145932389' , 'giza' ),
('3','01145903119' , 'alex' );


 insert into galleries (user_id, name, imageurn) values
('1', 'My Special' , '/myspecial' ),
('2','My Collection' , '/mycollection' ),
('3','The Best' , '/the_best' ),
('1','I love them' , '/i_love_them' );


 insert into pokemons (name, type, imageurn) values
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