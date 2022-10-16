let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let idx = 0;

while (T--) {
  const N = Number(input[idx++]); // 동전의 가지수
  const coins = input[idx++].split(" ").map(Number); // 동전의 종류
  let M = Number(input[idx++]); // 만들어야 하는 금액

  let DP = Array(M + 1).fill(0); // DP[i] : i원을 만들 수 있는 모든 경우의 수
  DP[0] = 1;
  for (let i = 0; i < N; i++) {
    const coin = coins[i];
    for (let j = 1; j <= M; j++) {
      if (j >= coin) DP[j] += DP[j - coin];
    }
  }

  console.log(DP[M]);
}
