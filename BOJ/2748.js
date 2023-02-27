let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input = Number(input[0]);

const DP = new Array(input + 1).fill(0);

DP[1] = 1n;

for (let i = 2; i <= input; i++) {
  DP[i] = BigInt(DP[i - 1]) + BigInt(DP[i - 2]);
}

console.log(DP[input].toString());
