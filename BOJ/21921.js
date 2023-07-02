// 블로그
// 슬라이딩 윈도우

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);
let sum = visitors.slice(0, X).reduce((acc, cur) => acc + cur, 0);
let max = sum;
let maxCount = 1;

for (let i = 0; i < N - X; i++) {
  sum -= visitors[i];
  sum += visitors[i + X];

  if (sum === max) maxCount++;
  else if (sum > max) {
    maxCount = 1;
    max = sum;
  }
}

console.log(max === 0 ? "SAD" : max + "\n" + maxCount);
