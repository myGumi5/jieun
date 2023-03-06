let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const command = input[1].split(" ").map(Number);
const sorted = [...new Set(command)].sort((a, b) => a - b);
const map = new Map(); // object보다 빠르다
const answer = [];

sorted.forEach((num, i) => map.set(num, i)); // num의 index 저장
command.forEach((num) => answer.push(map.get(num)));

console.log(answer.join(" "));
