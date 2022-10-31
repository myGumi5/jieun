let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [S, E, Q] = input
  .shift()
  .split(" ")
  .map((el) => el.split(":").join(""));

let set = new Set();
let answer = 0;
for (let i of input) {
  let [time, name] = i.split(" ");
  time = time.split(":").join("");

  if (time <= S) set.add(name);
  else if (set.has(name) && time >= E && time <= Q) {
    set.delete(name);
    answer++;
  }
}
console.log(answer);
