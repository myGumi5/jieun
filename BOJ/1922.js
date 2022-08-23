const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift()); // 컴퓨터의 수 (정점의 수)
const M = Number(input.shift()); // 연결할 수 있는 선의 수 (간선의 수)

const parent = [];
for (let i = 1; i <= N + 1; i++) parent[i] = i;

const nodes = [];
for (let i = 0; i < M; i++) nodes[i] = input[i].split(" ").map(Number);

nodes.sort((a, b) => a[2] - b[2]); // 가중치에 대해 오름차순 정렬

const getParent = (v) => {
  if (parent[v] === v) return v;
  else return (parent[v] = getParent(parent[v]));
};

const isSameParent = (v1, v2) => {
  const p1 = getParent(v1);
  const p2 = getParent(v2);

  if (p1 === p2) return true;
  return false;
};

const unionParent = (v1, v2) => {
  const p1 = getParent(v1);
  const p2 = getParent(v2);

  if (p1 !== p2) parent[p2] = p1;
};

let answer = 0;
nodes.forEach((node) => {
  if (!isSameParent(node[0], node[1])) {
    unionParent(node[0], node[1]);
    answer += node[2];
  }
});

console.log(answer);
