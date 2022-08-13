const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let trash = Array.from(Array(N), () => Array(M).fill(0));

let answer = [];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let visited = Array.from(Array(N), () => Array(M).fill(false));

// 쓰레기가 있는 자리에 1로 세팅
for (let i = 0; i < K; i++) {
  const [y, x] = input[i].split(" ").map((el) => +el);
  trash[y - 1][x - 1] = 1;
}

// 범위 체크 함수
const rangeCheck = (y, x) => {
  if (y >= 0 && x >= 0 && y < N && x < M) return true;
  return false;
};

// DFS 탐색 한번 할때의 result 값
// DFS 탐색을 한다는 건 쓰레기가 있다는 의미니까 1로 세팅
let result = 1;
const DFS = (y, x) => {
  visited[y][x] = true; // 방문 체크

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    // 현재 기준으로 상하좌우에 쓰레기가 있다면
    if (rangeCheck(ny, nx) && !visited[ny][nx] && trash[ny][nx] === 1) {
      // 쓰레기 +1
      result += 1;
      DFS(ny, nx);
    }
  }

  return;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (trash[i][j] === 1) {
      DFS(i, j);
      // 한 번 탐색할 때의 결과들을 배열에 담기
      answer.push(result);
      result = 1;
    }
  }
}

// 최대값 출력
console.log(Math.max(...answer));
