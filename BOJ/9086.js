let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let answer = [];
let index = 0;
let T = Number(input[index++]);

while (T--) {
  let s = input[index++];
  s = s.slice(0, 1) + s.slice(s.length - 1);
  answer.push(s);
}

console.log(answer.join("\n"));
