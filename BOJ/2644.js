// 촌수계산

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n')
const n = Number(input.shift())
const [a, b] = input.shift().split(' ').map(Number)
input.shift()
input = input.map((el) => el.split(' ').map(Number))

let answer = -1
const family = Array.from({ length: n + 1 }, () => [])
const visited = Array(n + 1).fill(false)

input.forEach(([x, y]) => {
  family[x].push(y)
  family[y].push(x)
})

console.log(family)
BFS()
console.log(answer)

function BFS() {
  let queue = [[a, 0]]
  visited[a] = true

  while (queue.length) {
    const [fam, degree] = queue.shift()

    if (fam === b) {
      answer = degree
      return
    }

    family[fam].forEach((num) => {
      if (!visited[num]) {
        queue.push([num, degree + 1])
        visited[num] = true
      }
    })
  }
}
