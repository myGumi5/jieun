function solution(n) {
  if (n <= 2) return n;

  let DP = Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    if (i <= 2) DP[i] = i;
    else DP[i] = (DP[i - 1] + DP[i - 2]) % 1000000007;
  }

  return DP[n];
}

const n = 4;
console.log(solution(n));
