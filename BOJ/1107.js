let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]); // 목표 채널
const error = input[2] ? input[2].split(" ").map(Number) : [];

let answer = Math.abs(N - 100); // 초기 값은 +, - 버튼으로 목표 채널까지 이동하는 횟수

if (N === 100) console.log(answer); // 목표 채널이 100일 때는 바로 0 출력
else {
  // 채널 0부터 999999까지
  for (let i = 0; i <= 999999; i++) {
    const num = i.toString().split("").map(Number);
    let isError = false;

    for (let j = 0; j < num.length; j++) {
      // 숫자 i에 에러 수가 하나라도 포함돼있으면
      if (error.includes(num[j])) {
        isError = true;
        break;
      }
    }

    // 에러 버튼이 포함되지 않으면서 버튼 횟수가 최소인 채널 찾기
    if (!isError) {
      answer = Math.min(answer, Math.abs(N - i) + num.length);
    }
  }

  console.log(answer);
}
