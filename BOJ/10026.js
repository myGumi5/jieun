const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let grid = input.map((el) => el.split(""));

let answer = [0, 0]; // 적록X, 적록O
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let visited_normal = Array.from(Array(N), () => Array(N).fill(false));
let visited_special = Array.from(Array(N), () => Array(N).fill(false));

// 범위 체크 함수
const rangeCheck = (y, x) => {
  if (y >= 0 && x >= 0 && y < N && x < N) return true;
  return false;
};

// 일반 사람들
const DFS_normal = (y, x) => {
  visited_normal[y][x] = true;
  const target = grid[y][x];

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (
      rangeCheck(ny, nx) &&
      !visited_normal[ny][nx] &&
      grid[ny][nx] === target
    ) {
      DFS_normal(ny, nx);
    }
  }

  return 1;
};

// 적록색약 사람들
const DFS_special = (y, x) => {
  visited_special[y][x] = true;
  const target = grid[y][x];

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    // 현재 위치가 B이면 B인 구역만 찾기
    if (target === "B") {
      if (
        rangeCheck(ny, nx) &&
        !visited_special[ny][nx] &&
        grid[ny][nx] === target
      ) {
        DFS_special(ny, nx);
      }
    }
    // 현재 위치가 R, G라면 B가 아닌 구역만 찾기
    else {
      if (
        rangeCheck(ny, nx) &&
        !visited_special[ny][nx] &&
        grid[ny][nx] !== "B"
      ) {
        DFS_special(ny, nx);
      }
    }
  }

  return 1;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited_normal[i][j]) {
      const normal = DFS_normal(i, j);
      answer[0] += normal;
    }
    if (!visited_special[i][j]) {
      const special = DFS_special(i, j);
      answer[1] += special;
    }
  }
}

console.log(answer.join(" "));
