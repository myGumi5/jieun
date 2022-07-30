const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const vertex = Number(input.shift());
const edge = Number(input.shift());

let pair = [...Array(vertex + 1)].map(() => []);

for (let i = 0; i < edge; i++) {
  const [from, to] = input[i].split(" ").map((el) => +el);
  pair[from].push(to);
  pair[to].push(from);
}

let visited = [];
let unvisited = [];

const BFS = (v) => {
  unvisited.push(v);

  while (unvisited.length) {
    const node = unvisited.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      unvisited.push(...pair[node]);
    }
  }

  return visited.length - 1;
};

console.log(BFS(1));
