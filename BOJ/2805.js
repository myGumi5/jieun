let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let min = 0,
  mid = 0,
  height = 0;
let max = Math.max(...trees);

while (min <= max) {
  let sum = 0;
  mid = parseInt((min + max) / 2);

  trees.forEach((tree) => {
    if (tree > mid) sum += tree - mid;
  });

  if (sum >= M) {
    if (mid > height) height = mid;
    min = mid + 1;
  } else max = mid - 1;
}

console.log(height);
