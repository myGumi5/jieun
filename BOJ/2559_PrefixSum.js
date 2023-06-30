// 수열
// 누적 합

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const temperature = input[1].split(" ").map(Number);
let sum = temperature.slice(0, K).reduce((acc, cur) => acc + cur, 0);

let answer = sum;

for (let i = 0; i < N - K; i++) {
  sum -= temperature[i];
  sum += temperature[i + K];
  answer = Math.max(answer, sum);
}

console.log(answer);
