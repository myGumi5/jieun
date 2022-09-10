let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let answer = "";
input = input[0];
for (let i of input) {
  if (i === i.toUpperCase()) answer += i.toLowerCase();
  else answer += i.toUpperCase();
}

console.log(answer);
