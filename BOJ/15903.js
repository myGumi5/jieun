// 카드 합체 놀이

class MinHeap {
  constructor() {
    this.heap = []
  }

  test() {
    return this.heap
  }

  isEmpty() {
    if (this.heap.length) return false
    return true
  }

  swap(i, j, arr) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  insert(value) {
    this.heap.push(value)

    let curIndex = this.heap.length - 1

    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2)
      if (this.heap[curIndex] >= this.heap[parentIndex]) break
      this.swap(curIndex, parentIndex, this.heap)
      curIndex = parentIndex
    }
  }

  getMinValue() {
    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const minValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.sinkDown(0)

    return minValue
  }

  sinkDown(index) {
    const leftIndex = index * 2 + 1
    const rightIndex = index * 2 + 2
    const size = this.heap.length

    let curIndex = index

    if (leftIndex < size && this.heap[leftIndex] < this.heap[curIndex]) curIndex = leftIndex
    if (rightIndex < size && this.heap[rightIndex] < this.heap[curIndex]) curIndex = rightIndex
    if (curIndex !== index) {
      this.swap(index, curIndex, this.heap)
      this.sinkDown(curIndex)
    }
  }
}

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const [_, m] = input[0].split(' ').map(Number)
input = input[1].split(' ').map(Number)
let answer = 0n

const heap = new MinHeap()
input.forEach((num) => {
  heap.insert(BigInt(num))
})

for (let i = 0; i < m; i++) {
  const a = heap.getMinValue()
  const b = heap.getMinValue()

  heap.insert(a + b)
  heap.insert(a + b)
}

while (!heap.isEmpty()) {
  answer += heap.getMinValue()
}

console.log(answer.toString())
