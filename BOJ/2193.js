const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const nums = new Array(N + 1);

nums[1] = 1;
nums[2] = 1;

for (let i = 3; i < nums.length; i++) {
  nums[i] = BigInt(nums[i - 1]) + BigInt(nums[i - 2]);
}

console.log(String(nums[N]));
