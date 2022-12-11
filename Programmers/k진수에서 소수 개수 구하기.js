function solution(n, k) {
  let answer = 0;
  n = n.toString(k).split("0"); // n을 k진수로 변환후 0을 기준으로 나누기

  for (let i = 0; i < n.length; i++) {
    if (isPrime(Number(n[i]))) answer++;
  }

  return answer;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const n = 437674;
const k = 3;
console.log(solution(n, k));
