# Setting-up PostgreSQL

1.  Download [PostgreSQL Installer](https://www.postgresql.org/download/).
2.  Ensure that you have checked pgAdmin 4 when installing PostgreSQL.
3.  Set a Password for postgres username.
4.  Open pgAdmin 4 and set a password for it.
5.  Add Psql [to path (env variables) to use psql cli](https://blog.sqlbackupandftp.com/setting-windows-path-for-postgres-tools).

### Example to make sure everything is working fine.

#### open psql using postgres username

    psql -U postgres

#### create a database

    CREATE DATABASE pokemon-gallery;

#### connect to pokemon-gallery database

    \c pokemon-gallery;

#### create pokemons table

    CREATE TABLE pokemons (
        id SERIAL PRIMARY KEY,
        name VARCHAR(55) NOT NULL
    );

#### insert data into pokemons table

    INSERT INTO pokemons (name) VALUES ('Pikachu');
