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

let answer = 1;
const dy = [-1, 0, 1, 0]; // 북동남서
const dx = [0, 1, 0, -1];
let visited = Array.from(Array(N), () => Array(M).fill(false));

const DFS = (y, x, dir) => {
  visited[y][x] = true; // 방문 체크
  let isBlocked = true;

  for (let i = 0; i < 4; i++) {
    // 현재 기준으로 왼쪽방향의 방향과 좌표 구하기
    const leftDir = (dir + 3) % 4;
    const leftY = y + dy[leftDir];
    const leftX = x + dx[leftDir];

    // 2-1.
    if (!visited[leftY][leftX] && map[leftY][leftX] === 0) {
      answer++;
      visited[leftY][leftX] = true;
      isBlocked = false;
      DFS(leftY, leftX, leftDir);
      break;
    }
    // 2-2.
    else dir = leftDir;
  }

  if (isBlocked) {
    const backDir = (((dir + 3) % 4) + 3) % 4;
    const backY = y + dy[backDir];
    const backX = x + dx[backDir];

    if (map[backY][backX] == 1) return;
    else DFS(backY, backX, dir);
  }
};

DFS(r, c, d);

console.log(answer); // 정답 출력
