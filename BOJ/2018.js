const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let answer = 1;

for (let i = 1; i <= N; i++) {
  let sum = i;
  for (let j = i + 1; j <= N; j++) {
    if (sum === N) {
      answer++;
      break;
    } else if (sum > N) break;
    sum += j;
  }
}

console.log(answer);
