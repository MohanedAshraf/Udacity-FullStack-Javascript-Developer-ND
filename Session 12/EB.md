# API Deployment

- Open the [pokemon_gallery project](./pokemon-gallery/), **_you should build your app first_**.
- Initialize EB locally in your project `eb init` _(notice .elasticbeanstalk folder created)_
  **_- Will ask you several questions._**
  - region = **us-east-1**
  - application to use = **create new one**
  - nodejs version = **based on your project**(for this project choose 16)
  - ssh = **No**
- Create EB Environment `eb create --single` .
  **_- Will ask you several questions._**
  - Environment name= **default**
  - DNS CNAME = **default**
  - Spot Fleet = **No**

**Now you have deployed your pokemons api, but it won't work you need to set Environment variable**

- Open **Elastic Beanstalk** on **AWS** console.
- Choose your **EB Environment** you have **created**.
- Open **Configuration** , In **software** section press on **edit** button.
- Scroll down to the end you will find **Environment properties** add your envs as follow:

      DB_HOST= <DB enpoint>
      DB_USER= <username>
      DB_PASSWORD= <password>
      DB_NAME= postgres //should be postgres
      ENV= dev
      PEPPER=mypepper
      TOKEN_SECRET= <your secret>
      TEST_DB_NAME= <your test DB>

You could use **eb setenv `key`=`value`** command instead of using AWS console.

**\*Now open your API url (you will find it in your environment page) , It should be working fine**
You can go to " **your url**/api/pokemons" will return the list of pokemons from your RDS database.
