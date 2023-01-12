let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let index = 0;
let answer = [];

while (true) {
  let num = input[index++];

  if (num === "0 0 0") break;

  num = num
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (Math.pow(num[0], 2) + Math.pow(num[1], 2) === Math.pow(num[2], 2)) answer.push("right");
  else answer.push("wrong");
}

console.log(answer.join("\n"));
