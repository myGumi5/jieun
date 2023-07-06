// 로프
// 정렬, 그리디

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

input.shift();
input = input
  .map(Number)
  .sort((a, b) => a - b)
  .map((n, idx) => n * (input.length - idx));

console.log(Math.max(...input));
