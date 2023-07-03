// 수들의 합2
// 누적 합

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const S = [0];
let answer = 0;

for (let i = 1; i <= N; i++) {
  S[i] = S[i - 1] + A[i - 1];
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j <= N; j++) {
    if (S[j] - S[i] === M) answer++;
  }
}

console.log(answer);
