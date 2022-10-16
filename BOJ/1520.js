let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const map = input.map((el) => el.split(" ").map(Number));
const DP = Array.from(Array(M), () => Array(N).fill(0));
const visited = Array.from(Array(M), () => Array(N).fill(false));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

DP[M - 1][N - 1] = 1; // 도착지점은 미리 1로 세팅
DFS(0, 0);

function DFS(y, x) {
  if (y === M - 1 && x === N - 1) return;
  if (visited[y][x]) return;

  visited[y][x] = true;

  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];

    if (isInRange(ny, nx) && map[y][x] > map[ny][nx]) {
      // (ny, nx)를 거치는 경로가 이미 있었다면
      // (y, x)에 (ny, nx)의 경로의 가지 수 더해주기
      if (DP[ny][nx]) DP[y][x] += DP[ny][nx];
      // 처음 거치는 경로라면
      else {
        DFS(ny, nx); // 그 경로를 또 탐색하고
        DP[y][x] += DP[ny][nx]; // 백트래킹할 때 채워질 경로의 가지 수
      }
    }
  }
}

function isInRange(y, x) {
  if (y >= 0 && x >= 0 && y < M && x < N) return true;
  return false;
}

console.log(DP[0][0]);
