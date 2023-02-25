let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
input = parseInt(input[0]);

let result = factorial(input);
let answer = 0;

function factorial(n) {
  if (n === 0) return 1n;
  return BigInt(n) * factorial(n - 1);
}

result = result.toString().split("");

for (let i = result.length - 1; i >= 0; i--) {
  if (result[i] === "0") answer++;
  else break;
}

console.log(answer);
