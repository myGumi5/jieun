const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number); // 정점의 수, 간선의 수
const schools = input.shift().split(" "); // 학교의 정보

const nodes = []; // 간선의 정보
for (let i = 0; i < M; i++) nodes[i] = input[i].split(" ").map(Number);

nodes.sort((a, b) => a[2] - b[2]); // 거리에 대해 오름차순 정렬

const parent = []; // 1 ~ N 의 부모는 자기 자신으로 초기화
for (let i = 1; i <= N; i++) parent[i] = i;

const getParent = (v) => {
  if (parent[v] === v) return v;
  else return (parent[v] = getParent(parent[v]));
};

const isSameParent = (v1, v2) => {
  const p1 = getParent(v1);
  const p2 = getParent(v2);

  if (p1 === p2) return true;
  return false;
};

const unionParent = (v1, v2) => {
  const p1 = getParent(v1);
  const p2 = getParent(v2);

  if (p1 !== p2) parent[p2] = p1;
};

let answer = 0;
let edgeCount = 0;
nodes.forEach((node) => {
  const u = node[0];
  const v = node[1];
  const d = node[2];

  // u 정점의 학교정보와 v 정점의 학교 정보가 다르고
  // 같은 부모를 가지고 있지 않으면 부모 합치기
  if (schools[u - 1] !== schools[v - 1] && !isSameParent(u, v)) {
    unionParent(u, v);
    answer += d; // 최소 거리 더해가기
    edgeCount++; // 연결될 때마다 간선의 개수 세기
  }
});

// 모든 정점이 연결되지 않았다면 (간선의 수가 N-1개가 안되면) -1 출력
answer = edgeCount < N - 1 ? -1 : answer;
console.log(answer);
