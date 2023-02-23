let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let index = 0;
let answer = [];
let M, N, K, map, visited;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

while (T--) {
  [M, N, K] = input[index++].split(" ").map(Number);
  map = Array.from(Array(N), () => Array(M).fill(0));
  visited = Array.from(Array(N), () => Array(M).fill(false));
  let earthworm = 0;

  for (let i = 0; i < K; i++) {
    const [x, y] = input[index++].split(" ").map(Number);
    map[y][x] = 1; // 배추 위치 표시
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && map[i][j] === 1) {
        DFS(i, j);
        earthworm++;
      }
    }
  }

  answer.push(earthworm);
}

function DFS(y, x) {
  visited[y][x] = true;

  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];

    if (ny >= 0 && nx >= 0 && ny < N && nx < M) {
      if (!visited[ny][nx] && map[ny][nx] === 1) DFS(ny, nx);
    }
  }
}

console.log(answer.join("\n"));
