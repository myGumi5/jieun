function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}

const a = 3;
const b = 2;
const n = 20;
console.log(solution(a, b, n)); // 36
