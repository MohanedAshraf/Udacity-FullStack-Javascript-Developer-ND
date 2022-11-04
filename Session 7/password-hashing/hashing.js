const md5 = require("md5");

const myPassword = "password";

const result = md5(myPassword);

console.log("Only Hashing using md5 algo -------", result);
