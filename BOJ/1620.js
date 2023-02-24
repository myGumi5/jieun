let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const pocketmon = input.splice(0, N);
const map = new Map();
let answer = [];

for (let i = 0; i < N; i++) {
  map.set(pocketmon[i], i + 1);
}

for (let i = 0; i < M; i++) {
  if (isNaN(input[i])) answer.push(map.get(input[i])); // 문자열이면
  else answer.push(pocketmon[+input[i] - 1]); // 숫자면
}

console.log(answer.join("\n"));
