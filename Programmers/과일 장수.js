function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const temp = score.slice(i, i + m);
    if (temp.length === m) answer += temp[temp.length - 1] * m;
  }

  return answer;
}

const k = 3;
const m = 4;
const score = [1, 2, 3, 1, 2, 3, 1];
console.log(solution(k, m, score));
