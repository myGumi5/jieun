const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

let answer = [];
let count = BigInt(-1);
let result = BigInt(2 ** N) + count;

console.log(result.toString());

const hanoi = (n, from, by, to) => {
  if (n === 0) return;
  else {
    hanoi(n - 1, from, to, by);
    answer.push([from, to]);
    hanoi(n - 1, by, from, to);
  }
};

if (N <= 20) {
  hanoi(N, 1, 2, 3);
  console.log(answer.map((el) => el.join(" ")).join("\n"));
}
