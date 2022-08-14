const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
let farm = input.map((el) => el.split(" ").map((el) => +el));
let visited = Array.from(Array(N), () => Array(M).fill(false));

// 8방위 탐색
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
const dx = [0, 1, 1, 1, 0, -1, -1, -1];
let answer = 0;
let isHighest;

// 범위 체크 함수
const rangeCheck = (y, x) => {
  if (y >= 0 && x >= 0 && y < N && x < M) return true;
  return false;
};

const DFS = (y, x) => {
  visited[y][x] = true; // 방문 체크

  // 8방위 탐색
  for (let i = 0; i < 8; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (rangeCheck(ny, nx)) {
      // 인접한 구역에 현재 크기보다 큰 것이 있다면 산봉우리가 안 됨
      if (farm[ny][nx] > farm[y][x]) isHighest = false;
      // 아직 방문하지 않았고 현재 크기와 같다면 해당 구역을 기준으로 탐색 시작
      if (!visited[ny][nx] && farm[ny][nx] === farm[y][x]) DFS(ny, nx);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (farm[i][j] > 0 && !visited[i][j]) {
      isHighest = true; // 현재 구역을 산봉우리로 두고 탐색시작
      DFS(i, j);
      // 현재 구역이 산봉우리라면 정답 +1
      if (isHighest) answer++;
    }
  }
}

console.log(answer);
