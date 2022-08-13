const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const [r, c, d] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let map = input.map((el) => el.split(" ").map((el) => +el));

let answer = 1; // 1번 조건을 위해 초기값을 1로 세팅
// 북동남서
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let visited = Array.from(Array(N), () => Array(M).fill(false));

const DFS = (y, x, dir) => {
  visited[y][x] = true; // 방문 체크

  for (let i = 0; i < 4; i++) {
    // 현재 기준으로 왼쪽방향의 방향과 좌표 구하기
    const leftDir = (dir + 3) % 4;
    const leftY = y + dy[leftDir];
    const leftX = x + dx[leftDir];

    // 2-1.
    if (!visited[leftY][leftX] && map[leftY][leftX] === 0) {
      answer++; // 청소하는 영역 +1
      visited[leftY][leftX] = true;
      isBlocked = false;
      DFS(leftY, leftX, leftDir);
      break;
    }
    // 2-2.
    else dir = leftDir;
  }

  // 네 방향 모두 청소가 됐거나 벽인 경우
  if (isBlocked) {
    // 현재 기준으로 후진 좌표 구하기
    const backDir = (((dir + 3) % 4) + 3) % 4;
    const backY = y + dy[backDir];
    const backX = x + dx[backDir];

    // 2-4.
    if (map[backY][backX] == 1) return;
    // 2-3.
    else DFS(backY, backX, dir);
  }
};

DFS(r, c, d);

console.log(answer); // 정답 출력
