let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M, k] = input.shift().split(" ").map(Number);
const costs = input.shift().split(" ").map(Number);
costs.unshift(0);
let parents = Array(N + 1)
  .fill(0)
  .map((e, i) => i);

function getParent(n) {
  if (parents[n] === n) return n;
  return (parents[n] = getParent(parents[n]));
}

function union(p1, p2) {
  if (costs[p1] >= costs[p2]) parents[p1] = p2;
  else parents[p2] = p1;
}

input.forEach((rel) => {
  const [a, b] = rel.split(" ").map(Number);

  const p1 = getParent(a);
  const p2 = getParent(b);

  if (p1 !== p2) union(p1, p2);
});

let answer = 0;
parents.forEach((p, idx) => {
  if (p === idx) answer += costs[idx];
});

console.log(answer > k ? "Oh no" : answer);
