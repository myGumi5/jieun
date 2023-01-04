let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [x, y, w, h] = input[0].split(" ").map(Number);
console.log(Math.min(x, y, w - x, h - y));
