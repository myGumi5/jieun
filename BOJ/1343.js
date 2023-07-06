// 폴리오미노
// 그리디

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n")[0];

function solution(str) {
  str = str.replaceAll("XXXX", "AAAA");
  str = str.replaceAll("XX", "BB");

  return str.includes("X") ? -1 : str;
}

console.log(solution(input));
