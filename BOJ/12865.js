let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
let bags = input.map((el) => el.split(" ").map(Number));
bags.unshift(0); // index 1부터 시작하기 위함

let DP = Array.from(Array(N + 1), () => Array(K + 1).fill(0));
for (let i = 1; i <= N; i++) {
  const [weight, value] = bags[i]; // i번째 가방의 무게, 가치

  for (let j = 1; j <= K; j++) {
    if (j < weight) DP[i][j] = DP[i - 1][j];
    else DP[i][j] = Math.max(DP[i - 1][j], value + DP[i - 1][j - weight]);
  }
}

let answer = 0;
for (let i = 1; i <= N; i++) {
  answer = Math.max(answer, DP[i][K]);
}

console.log(answer);
