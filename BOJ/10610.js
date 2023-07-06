// 30
// 정렬, 수학

let N = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
const arr = N[0].split("").map(Number);
const sum = arr.reduce((acc, cur) => acc + cur, 0);

if (sum % 3 === 0 && arr.includes(0)) {
  arr.sort((a, b) => b - a);
  console.log(arr.join(""));
} else {
  console.log(-1);
}
