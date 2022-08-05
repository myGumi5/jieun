const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, L, R] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let map = input.map((el) => el.split(" ").map(Number));

let answer = 0;
const dy = [-1, 0, 1, -1];
const dx = [0, 1, 0, -1];

const rangeCheck = (y, x) => {
  if (y >= 0 && x >= 0 && y < N && x < N) return true;
  return false;
};

const DFS = (row, col, visited) => {
  visited[row][col] = true;
  let population = map[row][col];
  let union = [[row, col]];

  let stack = [[row, col]];

  while (stack.length) {
    const [y, x] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (rangeCheck(ny, nx) && !visited[ny][nx]) {
        const diff = Math.abs(map[y][x] - map[ny][nx]);

        if (diff >= L && diff <= R) {
          stack.push([ny, nx]);
          population += map[ny][nx];
          visited[ny][nx] = true;
          union.push([ny, nx]);
        }
      }
    }
  }

  union.forEach(([y, x]) => {
    map[y][x] = Math.floor(population / union.length);
  });

  return union.length;
};

while (true) {
  let visited = Array.from(Array(N), () => Array.from(N).fill(false));
  let hasUnion = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const unionCount = DFS(i, j, visited);

        if (unionCount > 1) hasUnion = true;
      }
    }
  }

  if (!hasUnion) break;
  answer++;
}

console.log(answer);
