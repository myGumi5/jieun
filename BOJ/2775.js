let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let index = 0;
let answer = [];

while (T--) {
  const k = Number(input[index++]); // 타겟 층
  const n = Number(input[index++]); // 타겟 호

  let apart = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 0) apart[i][j] = j;
      else apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
    }
  }

  answer.push(apart[k][n]);
}

console.log(answer.join("\n"));
