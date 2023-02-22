let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let index = 0;
let answer = [];

while (T--) {
  let command = input[index++];
  let stack = [];
  let flag = false;

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(") stack.push(command[i]);
    else {
      if (stack.length) stack.pop();
      else flag = true;
    }
  }

  if (stack.length || flag) answer.push("NO");
  else answer.push("YES");
}

console.log(answer.join("\n"));
