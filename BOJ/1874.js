let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [n, ...nums] = input.map((i) => +i);
let stack = [];
let answer = [];
let pushedNum = 1;
let flag = false;

for (let i = 0; i < n; i++) {
  const num = nums[i];

  while (pushedNum <= num) {
    stack.push(pushedNum++);
    answer.push("+");
  }

  const poppedNum = stack.pop();
  if (poppedNum !== num) {
    flag = true;
    break;
  }
  answer.push("-");
}

if (flag) console.log("NO");
else console.log(answer.join("\n"));
