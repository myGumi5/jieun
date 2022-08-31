const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let answer = 0;

const check = (num) => {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) result++;
  }
  return result > 2 ? false : true;
};

for (let i = 0; i < N; i++) {
  if (nums[i] == 1) continue;
  if (check(nums[i])) answer++;
}

console.log(answer);
