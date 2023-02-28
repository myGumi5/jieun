let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let index = 0;
let answer = [];

while (T--) {
  const func = input[index++].split("");
  index++;
  let command = JSON.parse(input[index++]);

  let isError = false;
  let isReversed = false;

  for (let i = 0; i < func.length; i++) {
    if (func[i] === "R") isReversed = !isReversed;
    else if (func[i] === "D") {
      if (command.length) {
        if (isReversed) command.pop();
        else command.shift();
      } else {
        isError = !isError;
        break;
      }
    }
  }

  if (isError) answer.push("error");
  else {
    if (isReversed) command.reverse();

    answer.push(JSON.stringify(command));
  }
}

console.log(answer.join("\n"));
