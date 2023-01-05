let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "0") twoPointer(input[i]);
}

console.log(answer.join("\n"));

function twoPointer(num) {
  let start = 0;
  let end = num.length - 1;
  let flag = false;

  while (start < end) {
    if (num[start] !== num[end]) {
      flag = true;
      break;
    }
    start++;
    end--;
  }

  flag ? answer.push("no") : answer.push("yes");
}
