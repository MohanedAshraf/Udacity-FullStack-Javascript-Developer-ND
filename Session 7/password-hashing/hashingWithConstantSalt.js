const md5 = require("md5");

const myPassword = "password";
const salt = "mySalt";
const result = md5(myPassword + salt);

console.log("Hashing with constant salt using md5 algo ------", result);
