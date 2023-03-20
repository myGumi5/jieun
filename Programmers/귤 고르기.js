function solution(k, tangerine) {
  const store = {};
  tangerine.forEach((v) => (store[v] = (store[v] || 0) + 1));

  const sorted = Object.values(store).sort((a, b) => b - a);
  let answer = 0;

  for (let v of sorted) {
    if (k <= 0) break;
    k -= v;
    answer++;
  }

  return answer;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));
