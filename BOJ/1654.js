// 랜선 자르기

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const N = Number(input.shift().split(' ')[1]);
input = input.map(Number);

let minLen = 1; // K의 범위 1 ~ 10,000
let maxLen = Math.max(...input);
let midLen;

while (minLen <= maxLen) {
  midLen = Math.floor((minLen + maxLen) / 2);
  const cableCount = input.reduce((acc, cur) => acc + Math.floor(cur / midLen), 0);

  if (cableCount < N) maxLen = midLen - 1;
  else minLen = midLen + 1;
}

console.log(maxLen);
