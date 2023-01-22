let [N, K] = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\r\n")[0]
  .split(" ")
  .map(Number);

let arr = Array(N)
  .fill(0)
  .map((el, i) => i + 1);
let answer = "<";

while (arr.length > 1) {
  for (let i = 0; i < K - 1; i++) {
    arr.push(arr.shift());
  }
  answer += arr.shift() + ", ";
}

answer += arr[0] + ">";

console.log(answer);
