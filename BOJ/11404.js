const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift()); // 도시 개수
const m = Number(input.shift()); // 버스 개수
input = input.map((el) => el.split(" ").map((el) => +el));

let nosun = Array.from(new Array(n), () => Array(n).fill(0));

// 최소의 수 넣기
for (let i = 0; i < m; i++) {
  const from = input[i][0];
  const to = input[i][1];
  const cost = input[i][2];

  // index 맞추기 위해 -1
  if (nosun[from - 1][to - 1] !== 0) {
    nosun[from - 1][to - 1] = Math.min(cost, nosun[from - 1][to - 1]);
  } else nosun[from - 1][to - 1] = cost;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nosun[i][k] !== 0 && nosun[k][j] !== 0) {
        nosun[i][j] = Math.min(nosun[i][j], nosun[i][k] + nosun[k][j]);
      }
    }
  }
}

console.log(nosun);
