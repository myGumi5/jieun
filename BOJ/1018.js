let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const blackFirst = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];
const whiteFirst = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
let answer = [];

for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    answer.push(blackFirstFunc(i, j));
    answer.push(whiteFirstFunc(i, j));
  }
}

console.log(Math.min(...answer));

function blackFirstFunc(y, x) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== blackFirst[i - y][j - x]) count++;
    }
  }

  return count;
}

function whiteFirstFunc(y, x) {
  let count = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== whiteFirst[i - y][j - x]) count++;
    }
  }

  return count;
}
