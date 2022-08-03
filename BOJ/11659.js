const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const nums = input
  .shift()
  .split(" ")
  .map((el) => +el);
let accSum = new Array(N + 1).fill(0);
let answer = [];

nums.forEach((num, idx) => {
  accSum[idx + 1] = num + accSum[idx];
});

for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map((el) => +el);
  answer.push(accSum[end] - accSum[start - 1]);
}

console.log(answer.join("\n"));

// for문 안에 console.log()를 여러번 찍으면 시간초과
