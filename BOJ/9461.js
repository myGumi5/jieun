let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());

const answer = [];

while (T--) {
  const N = Number(input.shift());
  const DP = new Array(N + 1).fill(0);

  DP[0] = 0;
  DP[1] = 1;

  if (N >= 2) {
    DP[2] = 1;

    for (let i = 3; i <= N; i++) {
      DP[i] = DP[i - 2] + DP[i - 3];
    }
  }

  answer.push(DP[N]);
}

console.log(answer.join("\n"));
