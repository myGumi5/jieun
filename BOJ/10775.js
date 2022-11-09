let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const G = Number(input.shift());
const P = Number(input.shift());
input = input.map(Number);

const parents = Array(G + 1)
  .fill(0)
  .map((e, i) => i);

let answer = 0;
for (let i = 0; i < P; i++) {
  const gate = input[i];
  const validGate = getParent(gate);

  if (!validGate) break;

  answer++;
  union(validGate, validGate - 1);
}

function getParent(n) {
  if (parents[n] === n) return n;
  return (parents[n] = getParent(parents[n]));
}

function union(a, b) {
  a = getParent(a);
  b = getParent(b);

  if (a !== b) parents[a] = b;
}

console.log(answer);
