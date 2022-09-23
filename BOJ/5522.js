let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
console.log(input);
