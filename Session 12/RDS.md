# RDS Database Hosting

- Go to **RDS** then press on **create database** button.
- Choose standard create, then **Postgresql** engine.
- Choose **free tier** template.
- Write your custom **database identifier** then the **username** and **password**.
- In the **Connectivity** section turn the public access on, then create the database.

**Now you have created your database, but if you tried to access it locally (or anywhere) your connection will not accepted, so one more thing to do.**

- Open your database you have created, then under security section select the **default** VPC security group.
- Press on the **only one** security group you have, then press on **edit inbound rules** buttton.
- Add new role with **All traffic** type and `0.0.0.0/0` ip address, then press **Save**.

**NOTE**

**_Now your Database is open to all type of protocols and anyone to access it, you can define a whitelist of ips but for sack of learning leave it open_**

**Let's Connect to our Database.**

- Install any postgres **GUI tool** for example [Postbird](https://www.softpedia.com/get/Internet/Servers/Database-Utils/Postbird.shtml).
- Open RDS database you have created you should see the **endpoint** and **port** number.
- Open Postbird and Add a new Connection , then **Connect url**, your url should look like this:

`postgres://<username>:<password>@<DB endpoint>:<port>/postgres`

**Now you're connected.**

Let's **migrate up** our database open [pokemon-gallery api](./pokemon-gallery/) create **.env** file as follows:

    DB_HOST= <DB enpoint>

    DB_USER= <username>

    DB_PASSWORD= <password>

    DB_NAME= postgres //should be postgres

    ENV= dev

then migrate up your database by this command `db-migrate up` .
**_If you open Postbird you will notice every thing migrated but there is no data in tables_**

to ease things up open [DATA.sql](./pokemon-gallery/DATA.sql) file **copy** the sql queries , open your DB on postbird then open any **table** that you have migrated open **query tab** , then **paste** the queries and run them.

Hurray 🥳 now your Database is up and running.
