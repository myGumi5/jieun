const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(input.shift());
let index = 0;
let answer = [];

while (T--) {
  const N = Number(input[index++]); // 동전의 가지 수
  const coins = input[index++].split(" ").map(Number); // N개의 동전
  const M = Number(input[index++]); // 타겟 금액

  let DP = new Array(M + 1).fill(0);
  DP[0] = 1;

  for (let i = 0; i < N; i++) {
    const coin = coins[i];

    for (let j = coin; j <= M; j++) {
      DP[j] += DP[j - coin];
    }
  }

  answer.push(DP[M]);
}

console.log(answer.join("\n"));
