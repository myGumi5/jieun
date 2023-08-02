// 팀배분

let input = require('fs')
  .readFileSync('./input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n')

const n = Number(input[0])
const nodes = Array.from({ length: n + 1 }, () => [])
const blue = []
const white = []

for (let i = 1; i <= n; i++) {
  const [count, ...haters] = input[i].split(' ').map(Number)

  for (let j = 0; j < count; j++) {
    nodes[i].push(haters[j])
  }
}

for (let i = 1; i <= n; i++) {
  // 이미 팀이 정해져있다면 패쓰
  if (blue.includes(i) || white.includes(i)) continue
  BFS(i)
}

blue.sort((a, b) => a - b)
white.sort((a, b) => a - b)

console.log(blue.length + '\n' + blue.join(' ') + '\n' + white.length + '\n' + white.join(' '))

function BFS(node) {
  blue.push(node)
  const queue = [node]

  while (queue.length) {
    const cur = queue.shift()
    let otherTeam = ''
    if (blue.includes(cur)) otherTeam = 'white'
    else if (white.includes(cur)) otherTeam = 'blue'

    for (let i = 0; i < nodes[cur].length; i++) {
      const hater = nodes[cur][i]

      if (blue.includes(hater) || white.includes(hater)) continue

      if (otherTeam === 'blue') blue.push(hater)
      else white.push(hater)

      queue.push(hater)
    }
  }
}
