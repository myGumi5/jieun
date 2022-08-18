const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let chess = new Array(N + 1);
let answer = 0;

const isValid = (col) => {
  for (let i = 1; i <= col - 1; i++) {
    // 같은 행의 수를 가졌거나 (한 행에 두개의 퀸이 위치하거나)
    // 행의 차이와 열의 차이가 같다면 (두 퀸이 대각선에 위치한다면)
    // 유효하지 않음
    if (chess[col] === chess[i] || col - i === Math.abs(chess[col] - chess[i]))
      return false;
  }
  return true;
};

const setQueen = (col) => {
  // 범위를 벗어나면 모든 퀸을 위치에 놓았다는 의미이므로
  // 정답 +1 하고 백트래킹
  if (col > N) {
    answer++;
    return;
  }

  for (let row = 1; row <= N; row++) {
    chess[col] = row;

    // 이번 col에 row를 놓는 것에 문제가 없다면 다음 queen 위치 탐색
    if (isValid(col)) setQueen(col + 1);
  }
};

setQueen(1);

console.log(answer);
