// 구간 합 구하기 5
// 누적 합

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, _] = input.shift().split(" ").map(Number);
let nums = input.splice(0, N).map((el) => el.split(" ").map(Number));
let sum = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
let answer = [];

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    sum[i][j] = nums[i - 1][j - 1] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
  }
}

input = input.map((el) => el.split(" ").map(Number));
input.forEach(([x1, y1, x2, y2]) => {
  answer.push(sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1]);
});

console.log(answer.join("\n"));
