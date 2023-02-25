let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
input = input.map((el) => el.split(" ").map(Number));

let GRAY = 0;
let WHITE = 0;
let BLACK = 0;

recur(0, 0, N);

console.log(GRAY);
console.log(WHITE);
console.log(BLACK);

function recur(y, x, size) {
  if (isSameColor(y, x, size)) {
    if (input[y][x] === -1) GRAY++;
    else if (input[y][x] === 0) WHITE++;
    else BLACK++;

    return;
  }

  const newSize = size / 3;

  // 위쪽
  recur(y, x, newSize);
  recur(y, x + newSize, newSize);
  recur(y, x + 2 * newSize, newSize);

  // 중간
  recur(y + newSize, x, newSize);
  recur(y + newSize, x + newSize, newSize);
  recur(y + newSize, x + 2 * newSize, newSize);

  // 아래쪽
  recur(y + 2 * newSize, x, newSize);
  recur(y + 2 * newSize, x + newSize, newSize);
  recur(y + 2 * newSize, x + 2 * newSize, newSize);
}

// 같은 색상으로 이루어졌는지 체크
function isSameColor(y, x, size) {
  const color = input[y][x];

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (color !== input[i][j]) return false;
    }
  }

  return true;
}
