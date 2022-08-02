const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
let farm = Array.from(Array(N), () => new Array(M));
for (let i = 0; i < N; i++) {
  farm[i] = input[i].split(" ").map((el) => +el);
}
let visited = Array.from(Array(N), () => new Array(M).fill(false));

const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
const dx = [0, 1, 1, 1, 0, -1, -1, -1];
let answer = 0;
let isHighest = true;

const DFS = (y, x) => {
  visited[y][x] = true;

  for (let i = 0; i < 8; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (ny >= 0 && nx >= 0 && ny < N && nx < M) {
      if (farm[ny][nx] > farm[y][x]) isHighest = false;
      if (!visited[ny][nx] && farm[ny][nx] === farm[y][x]) DFS(ny, nx);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (farm[i][j] > 0 && !visited[i][j]) {
      isHighest = true;
      DFS(i, j);

      if (isHighest) answer++;
    }
  }
}

console.log(answer);
