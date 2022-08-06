const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let schedule = input.map((el) => el.split(" ").map(Number));
let DP = new Array(N).fill(0); // 가치에 대한 DP

for (let i = 0; i < N; i++) {
  // 오늘자 업무의 걸리는 시간과 가치
  const time = schedule[i][0];
  const price = schedule[i][1];

  // 오늘 업무의 걸리는 시간이 N일을 초과하면 패스
  if (i + time > N) continue;

  // for문을 통해 얻었던 오늘의 업무 가치들을 누적해서 쌓기
  DP[i] += price;

  for (let j = i + time; j < N; j++) {
    DP[j] = Math.max(DP[i], DP[j]);
  }
}

console.log(Math.max(...DP));
