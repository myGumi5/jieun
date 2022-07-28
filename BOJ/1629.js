const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [A, B, C] = input[0].split(" ").map((el) => BigInt(el));

const recur = (a, b) => {
  if (b == BigInt(1)) return a % C;
  else {
    const result = recur(a, BigInt(parseInt(b / BigInt(2))));

    if (b % BigInt(2) == 0) {
      return (result * result) % C;
    } else {
      return (result * result * a) % C;
    }
  }
};

console.log(parseInt(recur(A, B)));
