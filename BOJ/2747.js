let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input = Number(input[0]);

const DP = new Array(input + 1).fill(0);

DP[1] = 1;

for (let i = 2; i <= input; i++) {
  DP[i] = DP[i - 1] + DP[i - 2];
}

console.log(DP[input]);
