const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map(Number);

if (input[0] == input[1] && input[1] == input[2] && input[2] == input[0]) {
  console.log(10000 + input[0] * 1000);
} else if (
  input[0] != input[1] &&
  input[1] != input[2] &&
  input[2] != input[0]
) {
  const max = Math.max(...input);
  console.log(max * 100);
} else {
  if (input[0] == input[1] || input[0] == input[2]) {
    console.log(1000 + input[0] * 100);
  } else if (input[1] == input[2]) {
    console.log(1000 + input[1] * 100);
  }
}
