let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let answer = [];

for (let str of input) {
  if (str === ".") break;

  let stack = [];
  let isBalanced = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[") stack.push(str[i]);
    else if (str[i] === ")") {
      const popped = stack.pop();

      if (popped !== "(") {
        isBalanced = false;
        break;
      }
    } else if (str[i] === "]") {
      const popped = stack.pop();

      if (popped !== "[") {
        isBalanced = false;
        break;
      }
    } else continue;
  }

  if (!isBalanced || stack.length) answer.push("no");
  else answer.push("yes");
}

console.log(answer.join("\n"));
