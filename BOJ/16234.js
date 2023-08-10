// 인구 이동

let input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
const [N, L, R] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
let day = 0;

while (true) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  let isUnionFormed = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const unionCount = BFS(i, j, visited);
        if (unionCount > 1) isUnionFormed = true;
      }
    }
  }

  if (!isUnionFormed) break;
  day++;
}

function BFS(y, x, visited) {
  const queue = [[y, x]];
  const union = [[y, x]];
  visited[y][x] = true;

  let population = input[y][x];

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const ny = cy + dy[d];
      const nx = cx + dx[d];

      if (rangeCheck(ny, nx) && !visited[ny][nx]) {
        const diff = Math.abs(input[cy][cx] - input[ny][nx]);

        if (L <= diff && diff <= R) {
          population += input[ny][nx];
          queue.push([ny, nx]);
          union.push([ny, nx]);
          visited[ny][nx] = true;
        }
      }
    }
  }

  union.forEach(([y, x]) => {
    input[y][x] = Math.floor(population / union.length);
  });

  return union.length;
}

function rangeCheck(y, x) {
  if (y >= 0 && x >= 0 && y < N && x < N) return true;
  return false;
}

console.log(day);
