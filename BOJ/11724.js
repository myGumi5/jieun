let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));
let parents = new Array(N + 1).fill(0).map((v, i) => i);

for (const [u, v] of input) {
  if (getParent(u) !== getParent(v)) {
    unionFind(u, v);
  }
}

for (let p = 1; p <= N; p++) {
  getParent(p);
}

parents.shift();
console.log(parents.filter((v, i) => parents.indexOf(v) === i).length);

function getParent(v) {
  if (v === parents[v]) return v;
  return (parents[v] = getParent(parents[v]));
}

function unionFind(i, j) {
  const p1 = getParent(i);
  const p2 = getParent(j);

  if (p1 < p2) parents[p2] = p1;
  else parents[p1] = p2;
}
