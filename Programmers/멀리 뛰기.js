function solution(n) {
  const fibo = [0, 1];
  for (let i = 2; i <= n + 1; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }
  return fibo[n + 1];
}

// 입출력
const n = 4;
console.log(solution(n));
