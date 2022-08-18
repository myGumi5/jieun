const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let map = input.map((el) => el.split("").map((el) => +el));

let answer = [];

const recur = (y, x, n) => {
  let result = 0;

  for (let i = y; i < y + n; i++) {
    for (let j = x; j < x + n; j++) {
      result += map[i][j];
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

    recur(y, x, n); // 왼쪽 위
    recur(y, x + n, n); // 오른쪽 위
    recur(y + n, x, n); // 왼쪽 아래
    recur(y + n, x + n, n); // 오른쪽 아래

    answer.push(")");
  }
};

recur(0, 0, N);

console.log(answer.join(""));
