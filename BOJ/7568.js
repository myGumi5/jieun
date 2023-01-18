let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
input = input.map((el) => el.split(" ").map(Number));
let answer = [];

for (let i = 0; i < N; i++) {
  const [x, y] = input[i];
  let count = 0;

  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (x < input[j][0] && y < input[j][1]) count++;
  }

  answer.push(count + 1);
}

console.log(answer.join(" "));
