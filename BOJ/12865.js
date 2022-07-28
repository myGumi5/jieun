const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let bags = Array.from(Array(N + 1), () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [weight, value] = input[i - 1].split(" ").map((el) => +el);

  for (let j = 1; j <= K; j++) {
    if (j < weight) {
      bags[i][j] = bags[i - 1][j];
    } else {
      bags[i][j] = Math.max(bags[i - 1][j], bags[i - 1][j - weight] + value);
    }
  }
}

console.log(bags[N][K]);
