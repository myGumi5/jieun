let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const tree = Array.from(Array(N + 1), () => []);
let parents = Array(N + 1).fill(0);
input = input.map((el) => el.split(" ").map(Number));

for (const [from, to] of input) {
  tree[from].push(to);
  tree[to].push(from);
}

BFS();

parents = parents.slice(2);
console.log(parents.join("\n"));

function BFS() {
  const queue = [];
  parents[1] = 1;

  for (let child of tree[1]) {
    // 루트 자식 설정
    parents[child] = 1;
    queue.push(child);
  }

  while (queue.length) {
    const node = queue.shift();

    for (let child of tree[node]) {
      if (parents[child]) continue; // 이미 부모가 있는 노드면 패쓰
      parents[child] = node;
      queue.push(child);
    }
  }
}
