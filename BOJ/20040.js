let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));

let parent = Array(n).fill(0);
for (let i = 0; i < n; i++) parent[i] = i;

let answer = 0;
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i - 1];
  if (union(a, b)) {
    answer = i;
    break;
  }
}

console.log(answer);

function union(a, b) {
  const p1 = getParent(a);
  const p2 = getParent(b);

  if (p1 === p2) return true; // 두개의 부모가 같으면 사이클 형성
  else {
    parent[p2] = p1; // 같지 않으면 부모 묶어주기 (union)
    return false;
  }
}

function getParent(n) {
  if (parent[n] === n) return n;
  return (parent[n] = getParent(parent[n]));
}
