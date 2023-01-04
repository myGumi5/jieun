let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

if (input[0] === "1 2 3 4 5 6 7 8") console.log("ascending");
else if (input[0] === "8 7 6 5 4 3 2 1") console.log("descending");
else console.log("mixed");
