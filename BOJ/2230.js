let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
input = input.map(Number).sort((a, b) => a - b);
let answer = Number.MAX_VALUE;
let left = 0;
let right = 0;

while (right < N) {
  const diff = input[right] - input[left];
  if (diff < M) right++;
  else if (diff === M) {
    answer = M;
    break;
  } else {
    answer = Math.min(answer, diff);
    left++;
  }
}

console.log(answer);
