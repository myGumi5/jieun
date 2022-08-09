const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let DP = new Array(N + 1).fill(0);

for (let i = 2; i < N + 1; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 3 === 0) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  if (i % 2 === 0) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
}

console.log(DP[N]);
