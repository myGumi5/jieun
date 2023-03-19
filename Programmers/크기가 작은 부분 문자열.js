function solution(t, p) {
  const SIZE = p.length;
  let answer = 0;

  for (let i = 0; i <= t.length - SIZE; i++) {
    if (p >= t.substring(i, i + SIZE)) answer++;
  }

  return answer;
}

const t = "10203";
const p = "15";
console.log(solution(t, p));
