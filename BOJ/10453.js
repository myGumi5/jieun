const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());

for (let tc = 0; tc < T; tc++) {
  let AB = input[tc].split(" ");
  let A = AB[0].split("");
  let B = AB[1].split("");
  let answer = 0;

  let indexOfA = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === "a") indexOfA.push(i);
  }
  let indexOfB = [];
  for (let i = 0; i < B.length; i++) {
    if (B[i] === "a") indexOfB.push(i);
  }

  for (let i = 0; i < indexOfA.length; i++) {
    answer += Math.abs(indexOfA[i] - indexOfB[i]);
  }

  console.log(answer);
}
