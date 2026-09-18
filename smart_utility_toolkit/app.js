const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Checking numbers...");

console.log("10 is even:", isEven(10));
console.log("7 is even:", isEven(7));

logger("Check completed.");
