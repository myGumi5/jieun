// 알파벳

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [R, C] = input.shift().split(' ').map(Number);

let answer = 0;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
const visited = Array(26).fill(false);

visited[charCode(input[0][0])] = true;
DFS(0, 0, 1);

console.log(answer);

function DFS(y, x, count) {
  answer = Math.max(answer, count);

  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d];
    const nx = x + dx[d];

    if (!rangeCheck(ny, nx) || visited[charCode(input[ny][nx])]) continue;

    visited[charCode(input[ny][nx])] = true;
    DFS(ny, nx, count + 1);
    visited[charCode(input[ny][nx])] = false;
  }

  return;
}

function charCode(str) {
  return str.charCodeAt(0) - 65;
}

function rangeCheck(y, x) {
  if (y >= 0 && x >= 0 && y < R && x < C) return true;
  return false;
}
