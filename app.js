const express = require("express");

const app = express();
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
console.log(`The perimeter of a square with a width of 5 is ${square.perimeter(5)}`);
