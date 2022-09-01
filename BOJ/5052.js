const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputIndex = 0;
let answer = [];
let T = Number(input[inputIndex++]);

const isConsistent = (N, list) => {
  // 목록2의 시작이 목록1과 겹치면 return false
  for (let i = 0; i < N - 1; i++) {
    if (list[i + 1].startsWith(list[i])) return false;
  }
  return true;
};

while (T > 0) {
  const N = Number(input[inputIndex++]);
  let numList = [];

  // 입력받는 번호 목록을 문자열로 저장
  for (let i = 0; i < N; i++) {
    numList[i] = input[inputIndex++];
  }

  numList.sort(); // 오름차순 정렬

  if (isConsistent(N, numList)) answer.push("YES");
  else answer.push("NO");

  T--;
}

console.log(answer.join("\n"));
