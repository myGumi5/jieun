let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift()); // 강의 수
let schedules = [];

for (let i = 0; i < N; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  schedules.push([start, true]); // 시작시간
  schedules.push([end, false]); // 끝나는시간
}

// 시간의 오름차순으로 정렬 (시간이 같으면 끝나는시간을 우선순위 -> 강의를 끝내야 다음강의 시작하니까)
schedules.sort((a, b) => (a[0] === b[0] ? (a[1] ? 1 : -1) : a[0] - b[0]));

let room = 0;
let answer = 0;
schedules.forEach((schedule) => {
  if (schedule[1]) room += 1; // 강의가 시작하면 방 +1
  else room -= 1; // 강의가 끝나면 방 -1

  answer = Math.max(answer, room); // 나올수 있는 최대 방의 수 저장
});

console.log(answer);
