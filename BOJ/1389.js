let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));
const kevins = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    kevins[i][j] = Number.MAX_SAFE_INTEGER;

    // 자기 자신은 연결 표시 X
    if (i === j) kevins[i][j] = 0;
  }
}

for (let i = 0; i < M; i++) {
  const [from, to] = input[i];

  // 연결돼있음을 표시
  kevins[from][to] = 1;
  kevins[to][from] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      // i에서 j로의 연결성이 k를 거쳤을때보다 비용이 적은지 확인
      if (kevins[i][j] > kevins[i][k] + kevins[k][j]) {
        kevins[i][j] = kevins[i][k] + kevins[k][j];
      }
    }
  }
}

let answer = [Number.MAX_SAFE_INTEGER, 0];

for (let i = 1; i <= N; i++) {
  let sum = 0;

  for (let j = 1; j <= N; j++) {
    sum += kevins[i][j];
  }

  if (answer[0] > sum) answer = [sum, i];
}

console.log(answer[1]);
