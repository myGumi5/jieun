let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
input = input.map(Number);
input.unshift(0);
const DP = new Array(N + 1).fill(0);

DP[1] = input[1];

if (N >= 2) DP[2] = input[1] + input[2];

for (let i = 3; i <= N; i++) {
  const oneStep = input[i - 1] + DP[i - 3];
  const twoStep = DP[i - 2];

  DP[i] = input[i] + Math.max(oneStep, twoStep);
}

console.log(DP[N]);
