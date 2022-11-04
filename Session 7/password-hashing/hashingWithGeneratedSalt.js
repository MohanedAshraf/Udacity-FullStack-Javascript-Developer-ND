const bcrypt = require("bcrypt");

const myPassword = "password";
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);
const result = bcrypt.hashSync(myPassword, salt);

console.log("Generated Salt --------", salt);
console.log(
  "Hashing password with random generated salt using bcrypt algo #0 --",
  result
);

const salt1 = bcrypt.genSaltSync(saltRounds);
const result1 = bcrypt.hashSync(myPassword, salt1);

console.log("Generated Salt --------", salt1);
console.log(
  "Hashing password with random generated salt using bcrypt algo #1 --",
  result1
);
