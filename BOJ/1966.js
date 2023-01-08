let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let index = 0;
let T = Number(input[index++]);
let answer = [];

while (T--) {
  let [N, M] = input[index++].split(" ").map(Number);
  let priority = input[index++].split(" ").map(Number);
  let order = 0;

  while (true) {
    const max = Math.max(...priority); // 우선순위 중 최대값
    const pri = priority.shift(); // 현재 순서의 우선순위

    if (pri === max) {
      order++; // 순서 늘리고

      if (M === 0) {
        // 현재 순서를 찾는 거라면
        answer.push(order);
        break;
      }
    } else priority.push(pri); // 더 큰 우선순위가 있으므로 뒤로 보내기

    if (M === 0) M = priority.length - 1; // 찾고자하는 순서가 처음이라면 맨 뒤로 보내기
    else M--; // -1 해서 순서 앞당기기
  }
}

console.log(answer.join("\n"));
