const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(input[K - 1]);
