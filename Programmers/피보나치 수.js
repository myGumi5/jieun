function solution(n) {
  let answer = [];

  for (let i = 0; i <= n; i++) {
    if (i == 0) answer.push(0);
    else if (i == 1 || i == 2) answer.push(1);
    else {
      answer.push((answer[i - 1] + answer[i - 2]) % 1234567);
    }
  }

  return answer[n];
}

// 입출력
const n = 5;
console.log(solution(n));
