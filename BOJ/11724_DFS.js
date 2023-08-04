// 연결 요소의 개수

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const [N, _] = input.shift().split(' ').map(Number)
input = input.map((el) => el.split(' ').map(Number))
const graph = Array.from({ length: N + 1 }, () => [])
const visited = Array(N + 1).fill(false)
let connect = 0

for (const [from, to] of input) {
  graph[from].push(to)
  graph[to].push(from)
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    DFS(i)
    connect++
  }
}

function DFS(v) {
  if (visited[v]) return

  visited[v] = true

  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[graph[v][i]]) DFS(graph[v][i])
  }
}

console.log(connect)
