// 계단 오르기

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const N = Number(input.shift());
input = input.map(Number);

const score = Array(N + 1).fill(0); // score[0] : 시작점
score[1] = input[0];

if (N >= 2) score[2] = input[0] + input[1];
for (let i = 3; i <= N; i++) {
  const oneStep = input[i - 2] + score[i - 3]; // 한 계단 간격으로 i번째 계단에 올랐을 때 얻는 점수
  const twoStep = score[i - 2]; // 두 계단 간격으로 i번째 계단에 올랐을 때 얻는 점수

  score[i] = input[i - 1] + Math.max(oneStep, twoStep);
}

console.log(score[N]);
