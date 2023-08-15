// 게임을 만든 동준이

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const N = Number(input.shift());
input = input.map(Number);

let answer = 0;

// 다음 레벨의 점수와 현재 레벨의 점수만 비교하면 됨
for (let i = N - 1; i > 0; i--) {
  if (input[i] > input[i - 1]) continue;
  answer += input[i - 1] - input[i] + 1;
  input[i - 1] = input[i] - 1;
}

console.log(answer);
