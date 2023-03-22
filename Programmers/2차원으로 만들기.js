function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(num_list.slice(i * n, i * n + n));
  }

  return answer;
}

const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 2;
console.log(solution(num_list, n));
