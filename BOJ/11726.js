const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let DP = [0, 1, 2];

for (let i = 3; i <= n; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 10007;
}

console.log(DP[n]);
