// DNA 비밀번호
// 슬라이딩 윈도우

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [S, P] = input[0].split(" ").map(Number);
const dna = input[1];
const [A, C, G, T] = input[2].split(" ").map(Number);

const dict = {}; // 슬라이딩 윈도우를 구현할 dict
[dict["A"], dict["C"], dict["G"], dict["T"]] = [0, 0, 0, 0];
let answer = 0;

for (let i = 0; i < P; i++) {
  dict[dna[i]]++; // dict의 초기값 담기
}

validCheck();

for (let i = 0; i < S - P; i++) {
  dict[dna[i]]--;
  dict[dna[i + P]]++;

  validCheck();
}

function validCheck() {
  if (dict["A"] >= A && dict["C"] >= C && dict["G"] >= G && dict["T"] >= T) answer++;
}

console.log(answer);
