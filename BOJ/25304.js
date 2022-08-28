const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const X = Number(input.shift());
input.shift();

let sum = 0;
input.forEach((el) => {
  el = el.split(" ").map(Number);
  const [price, num] = el;
  sum += price * num;
});

console.log(sum === X ? "Yes" : "No");
