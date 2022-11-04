const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const myPassword = "password";
const saltRounds = 10;
const pepper = process.env.PEPPER;

const salt = bcrypt.genSaltSync(saltRounds);
const result = bcrypt.hashSync(myPassword + pepper, salt);

console.log("Password with Pepper ------", myPassword + pepper);
console.log("Generated Salt --------", salt);
console.log(
  "Hashing password with random generated salt using bcrypt algo  --",
  result
);
