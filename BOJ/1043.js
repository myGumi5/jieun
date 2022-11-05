let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const truth = input.shift().split(" ").map(Number);
const parties = input.map((el) => el.split(" ").map(Number));

parties.forEach((party, idx) => {
  const [count, ...nums] = party;
  console.log(nums);
});
