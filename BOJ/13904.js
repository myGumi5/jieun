let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let homeworks = input.map((el) => el.split(" ").map(Number));

// 과제 마감일 중 최대일 수 구하기
let maxDay = 0;
for (let i = 0; i < N; i++) {
  maxDay = Math.max(maxDay, homeworks[i][0]);
}

let answer = 0;
// 마감기한이 제일 긴 것부터 1일인것까지 순차적으로 당일에 할 수 있는 최선의 과제 구하기
for (let day = maxDay; day >= 1; day--) {
  let score = 0; // day일에 얻을 수 있는 최대점수
  let index = -1; // 최대점수의 인덱스

  // 현재 남아있는 과제들 중에서
  for (let i = 0; i < homeworks.length; i++) {
    // day일보다 마감기한이 길거나같은것들 중에서
    if (homeworks[i][0] >= day) {
      // 최대로 얻을 수있는 점수를 얻기
      if (homeworks[i][1] > score) {
        score = homeworks[i][1];
        index = i;
      }
    }
  }

  answer += score;
  // day일에 할 수 있는 과제가 있었다면 해당 과제는 했음을 표시하기 위해 배열에서 삭제
  if (index !== -1) homeworks.splice(index, 1);
}

console.log(answer);
