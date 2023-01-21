let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let answer = [];
let index = 0;

while (T--) {
  let [H, W, N] = input[index++].split(" ").map(Number);
  W = 1;

  while (N > H) {
    W++;
    N -= H;
  }

  if (W < 10) answer.push(`${N}0${W}`);
  else answer.push(`${N}${W}`);
}

console.log(answer.join("\n"));
