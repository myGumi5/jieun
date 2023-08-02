// 적의 적

let input = require('fs')
  .readFileSync('./input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n')

const [N, M] = input[0].split(' ').map(Number)
const nodes = Array.from({ length: N + 1 }, () => [])

for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].split(' ').map(Number)
  nodes[from].push(to)
  nodes[to].push(from)
}

const team = Array(N + 1).fill(null)
let flag = false

for (let i = 1; i <= N; i++) {
  if (team[i] !== null) continue
  if (!BFS(i)) {
    flag = true
    break
  }
}

console.log(flag ? 0 : 1)

function BFS(node) {
  team[node] = true
  const queue = [node]

  while (queue.length) {
    const cur = queue.shift()
    const curTeam = team[cur]

    if (!nodes[cur].length) continue

    for (let i = 0; i < nodes[cur].length; i++) {
      const hater = nodes[cur][i]

      if (team[hater] === curTeam) return false
      if (team[hater] === null) {
        team[hater] = !curTeam
        queue.push(hater)
      }
    }
  }

  return true
}
