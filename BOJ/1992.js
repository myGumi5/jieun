const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input.shift());
let map = input.map((el) => el.split("").map((el) => +el));

let answer = [];

const recur = (y, x, n) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += map[x + j][y + i];
    }
  }

  // n x n 행렬의 모든 합이 0이면 정답은 0
  if (result === 0) answer.push("0");
  // n x n 행렬의 모든 수가 1이면(합이 n*n) 정답은 1
  else if (result === n * n) answer.push("1");
  else {
    n = n / 2; // 위의 조건에 맞지 않으면 구역을 반으로

    // 기존 N x N 행렬에서 하나라도 압축되면
    answer.push("(");

    recur(y, x, n);
    recur(y + n, x, n);
    recur(y, x + n, n);
    recur(y + n, x + n, n);

    answer.push(")");
  }
};

recur(0, 0, N);

console.log(answer.join(""));
