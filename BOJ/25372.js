let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let index = 0;
let answer = [];

while (N--) {
  const s = input[index++];
  if (s.length >= 6 && s.length <= 9) answer.push("yes");
  else answer.push("no");
}

console.log(answer.join("\n"));
