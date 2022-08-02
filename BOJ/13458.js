const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const countOfStudents = input[1].split(" ").map((el) => +el);
const [B, C] = input[2].split(" ").map((el) => +el);

let answer = 0;

countOfStudents.forEach((count) => {
  answer++;
  count -= B;
  if (count > 0) answer += Math.ceil(count / C);
});

console.log(answer);
