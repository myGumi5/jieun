const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());
let answer = [];

// 테스트케이스만큼 반복
for (let tc = 0; tc < T; tc++) {
  const [a, b] = input[tc].split(" ").map(Number);
  let data = 1; // 곱셈을 해야하니 1로 세팅

  // a를 b번 곱할때마다 mod 10 연산
  for (let i = 0; i < b; i++) {
    data = (data * a) % 10;
  }

  // data가 0 이면 10번 컴퓨터를 의미
  data = data === 0 ? 10 : data;
  answer.push(data);
}

console.log(answer.join("\n"));
