// 수열
// 투 포인터

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const temperature = input[1].split(" ").map(Number);

let left = 0;
let right = left + K - 1;
let answer = Number.MIN_SAFE_INTEGER;

while (right < N) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum += temperature[i];
  }

  answer = Math.max(answer, sum);

  left++;
  right++;
}

console.log(answer);
