// 이분 그래프

let input = require('fs')
  .readFileSync('./input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n')

let index = 0
let answer = ''
let K = Number(input[index++])

while (K--) {
  const [V, E] = input[index++].split(' ').map(Number)
  const nodes = Array.from({ length: V + 1 }, () => [])

  for (let i = 0; i < E; i++) {
    const [from, to] = input[index++].split(' ').map(Number)
    nodes[from].push(to)
    nodes[to].push(from)
  }

  const visited = Array(V + 1).fill(null)
  let flag = false

  for (let i = 1; i <= V; i++) {
    // 이미 처리한 노드면 넘어가기
    if (visited[i] !== null) continue

    // 이분 그래프가 안되는 걸 확인하면 바로 break
    if (!BFS(i, nodes, visited)) {
      flag = true
      break
    }
  }

  if (flag) answer += 'NO\n'
  else answer += 'YES\n'
}

console.log(answer)

function BFS(start, nodes, visited) {
  visited[start] = true
  const adjNodes = [start]

  while (adjNodes.length) {
    const curNode = adjNodes.pop()
    const curSet = visited[curNode]

    if (!nodes[curNode]) continue

    for (let i = 0; i < nodes[curNode].length; i++) {
      const adjNode = nodes[curNode][i]

      // 나와 인접한 노드가 같은 집합에 있다면 바로 false return
      if (visited[adjNode] === curSet) return false
      // 아직 어떠한 집합에도 속해있지 않다면 나와 다른 집합으로 소속시키기
      if (visited[adjNode] === null) {
        visited[adjNode] = !curSet
        adjNodes.push(adjNode)
      }
    }
  }

  return true
}
