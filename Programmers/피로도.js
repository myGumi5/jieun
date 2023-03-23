function solution(k, dungeons) {
  let answer = 0;
  const visited = Array(dungeons.length).fill(false);

  const DFS = (count, k) => {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, minus] = dungeons[i];

      if (k >= need && !visited[i]) {
        visited[i] = true;
        DFS(count + 1, k - minus);
        visited[i] = false;
      }
    }
  };

  DFS(0, k);
  return answer;
}

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
console.log(solution(k, dungeons));
