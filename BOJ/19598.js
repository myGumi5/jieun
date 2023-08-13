// 최소 회의실 개수

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const N = Number(input.shift());
input = input.map((el) => el.split(' ').map(Number));

let room = 1;
let meetingIndex = 0;
const startSorted = [...input].sort((a, b) => a[0] - b[0]);
const endSorted = [...input].sort((a, b) => a[1] - b[1]);

for (let i = 1; i < N; i++) {
  if (startSorted[i][0] < endSorted[meetingIndex][1]) room++;
  else meetingIndex++;
}

console.log(room);
