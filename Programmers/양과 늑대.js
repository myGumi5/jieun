function solution(info, edges) {
  let answer = 0;
  const V = info.length;
  const E = edges.length;

  let nodes = Array.from(Array(V), () => []);
  for (let i = 0; i < E; i++) {
    const [from, to] = edges[i];
    nodes[from].push(to);
  }

  const DFS = (curNode, sheepCount, wolfCount, prevList) => {
    let nextList = [...prevList];
    let curNodeIndex = nextList.indexOf(curNode);

    if (info[curNode] == 1) wolfCount++;
    else sheepCount++;

    if (wolfCount >= sheepCount) return;
    answer = Math.max(answer, sheepCount);

    nextList.push(...nodes[curNode]);
    nextList.splice(curNodeIndex, 1);

    for (const nextNode of nextList) {
      DFS(nextNode, sheepCount, wolfCount, nextList);
    }
  };

  DFS(0, 0, 0, [0]);

  return answer;
}

// 입출력
const info = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0];
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
  [3, 7],
  [4, 8],
  [6, 9],
  [9, 10],
];
console.log(solution(info, edges));
