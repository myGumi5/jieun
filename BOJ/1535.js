let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let powers = input[1].split(" ").map(Number);
let joys = input[2].split(" ").map(Number);
powers.unshift(0);
joys.unshift(0);

let DP = Array.from(Array(N + 1), () => Array(101).fill(0));
for (let i = 1; i <= N; i++) {
  // i번째 사람에게 쓰이는 체력과 기쁨
  const power = powers[i];
  const joy = joys[i];

  for (let j = 1; j <= 99; j++) {
    if (j < power) DP[i][j] = DP[i - 1][j];
    else {
      DP[i][j] = Math.max(DP[i - 1][j], joy + DP[i - 1][j - power]);
    }
  }
}

console.log(DP[N][99]);
