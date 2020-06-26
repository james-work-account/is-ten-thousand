//run from the command line
//with `node use {value}`
//only works with numerical input

const is10k = require("./index");
const num = parseInt(process.argv[2]);
console.log(is10k(num));

