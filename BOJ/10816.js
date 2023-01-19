let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const cards = input[1].split(" ").map(Number);
const nums = input[3].split(" ").map(Number);
const map = new Map();
let answer = [];

cards.forEach((card) => {
  if (map.has(card)) map.set(card, map.get(card) + 1);
  else map.set(card, 1);
});

nums.forEach((num) => (map.has(num) ? answer.push(map.get(num)) : answer.push(0)));
console.log(answer.join(" "));
