let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

input.shift();
let maxDP = Array(3).fill(0);
let minDP = Array(3).fill(0);

input.forEach((el, i) => {
  const [a, b, c] = el.split(" ").map(Number);

  if (i === 0) {
    maxDP[0] = minDP[0] = a;
    maxDP[1] = minDP[1] = b;
    maxDP[2] = minDP[2] = c;
  } else {
    const max0 = maxDP[0],
      max1 = maxDP[1],
      max2 = maxDP[2];
    maxDP[0] = Math.max(max0, max1) + a;
    maxDP[1] = Math.max(max0, Math.max(max1, max2)) + b;
    maxDP[2] = Math.max(max1, max2) + c;

    const min0 = minDP[0],
      min1 = minDP[1],
      min2 = minDP[2];
    minDP[0] = Math.min(min0, min1) + a;
    minDP[1] = Math.min(min0, Math.min(min1, min2)) + b;
    minDP[2] = Math.min(min1, min2) + c;
  }
});

let answer = [0, 0];
answer[0] = Math.max(...maxDP);
answer[1] = Math.min(...minDP);

console.log(answer.join(" "));
