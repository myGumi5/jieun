let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const list = input.splice(0, N).map((el) => el.split(" "));
const map = new Map();
let answer = "";

for (const li of list) {
  map.set(li[0], li[1]);
}

for (const command of input) {
  answer += map.get(command) + "\n";
}

console.log(answer);
