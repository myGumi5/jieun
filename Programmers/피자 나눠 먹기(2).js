function solution(n) {
  let answer = 6;
  while (answer % n !== 0) answer += 6;
  return answer / 6;
}

const n = 10;
console.log(solution(n));
