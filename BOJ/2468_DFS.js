const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let area = input.map((el) => el.split(" ").map((el) => +el));

let answer = 1;
let maxHeight = 0;
let visited = [[]];

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let height = area[i][j];
    maxHeight = Math.max(maxHeight, height);
  }
}

const rangeCheck = (y, x) => {
  if (y >= 0 && x >= 0 && y < N && x < N) return true;
  return false;
};

const DFS = (y, x, h) => {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (rangeCheck(ny, nx) && area[ny][nx] > h && !visited[ny][nx]) {
      DFS(ny, nx, h);
    }
  }

  return 1;
};

for (let height = maxHeight - 1; height > 0; height--) {
  let safeArea = 0;
  visited = Array.from({ length: N }, () => new Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (area[i][j] > height && !visited[i][j]) {
        safeArea += DFS(i, j, height);
      }
    }
  }

  answer = Math.max(answer, safeArea);
}

console.log(answer);
