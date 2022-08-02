const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let arr = input[1].split(" ").map((el) => +el);

for (let i = 0; i < N; i++) {
  if (i % 2 === 0) {
    if (arr[i] % 2 === 0) {
      console.log("NO");
      return;
    }
  } else if (i % 2 !== 0) {
    if (arr[i] % 2 !== 0) {
      console.log("NO");
      return;
    }
  }
}
console.log("YES");
