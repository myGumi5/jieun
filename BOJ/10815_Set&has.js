// 숫자 카드
// set, has

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const sangkeunCards = new Set(input[1].split(" ").map(Number));
const compareCards = input[3].split(" ").map(Number);
const answer = compareCards.map((card) => (sangkeunCards.has(card) ? 1 : 0));
console.log(answer.join(" "));
