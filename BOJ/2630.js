let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
input = input.map((el) => el.split(" ").map(Number));
let WHITE = 0;
let BLUE = 0;

recur(0, 0, N);

function recur(y, x, size) {
  if (colorCheck(y, x, size)) {
    if (input[y][x] === 0) WHITE++;
    else if (input[y][x] === 1) BLUE++;

    return;
  }

  const newSize = size / 2;

  recur(y, x, newSize);
  recur(y, x + newSize, newSize);
  recur(y + newSize, x, newSize);
  recur(y + newSize, x + newSize, newSize);
}

function colorCheck(y, x, size) {
  const flag = input[y][x];

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (input[i][j] !== flag) return false;
    }
  }

  return true;
}

console.log(WHITE + "\n" + BLUE);
