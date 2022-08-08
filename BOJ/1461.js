const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let negative = input[0]
  .split(" ")
  .map((el) => +el)
  .filter((el) => el < 0)
  .map((el) => Math.abs(el))
  .sort((a, b) => b - a);

let positive = input[0]
  .split(" ")
  .map((el) => +el)
  .filter((el) => el > 0)
  .sort((a, b) => b - a);

let answer = 0;

if (positive[0] < negative[0] || positive.length === 0) {
  answer += negative[0];
  negative = negative.slice(M);
} else {
  answer += positive[0];
  positive = positive.slice(M);
}

for (let i = 0; i < negative.length; i += M) {
  answer += negative[i] * 2;
}
for (let i = 0; i < positive.length; i += M) {
  answer += positive[i] * 2;
}

console.log(answer);
