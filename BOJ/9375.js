let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\r\n");

let T = Number(input.shift());
let idx = 0;
let answer = [];

while (T--) {
  const n = Number(input[idx++]);

  let types = {};
  // 해당 종류가 나온적이 있으면 카운트 +1, 없으면 1로 초기화
  for (let i = 0; i < n; i++) {
    const type = input[idx++].split(" ")[1];
    types[type] = types[type] ? types[type] + 1 : 1;
  }

  let count = 1;
  for (let type in types) count *= types[type] + 1; // 각 조합+1(+1 : 안입는경우) 개수 곱해서 count세기
  answer.push(count - 1); // 다 안입는 경우 빼기
}

console.log(answer.join("\n"));
