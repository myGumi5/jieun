class MaxHeap {
  constructor() {
    this.heap = []
  }

  swap(index1, index2, arr) {
    return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])
  }

  insert(value) {
    this.heap.push(value)

    let curIndex = this.heap.length - 1

    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2)

      if (this.heap[curIndex] <= this.heap[parentIndex]) break

      this.swap(curIndex, parentIndex, this.heap)
      curIndex = parentIndex
    }
  }

  getMaxValue() {
    if (this.heap.length === 1) {
      return this.heap.pop()
    }

    const maxValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.sinkDown(0)

    return maxValue
  }

  sinkDown(index) {
    const HEAP_SIZE = this.heap.length
    let biggestIndex = index
    const leftIndex = index * 2 + 1
    const rightIndex = index * 2 + 2

    if (leftIndex < HEAP_SIZE && this.heap[leftIndex] > this.heap[biggestIndex]) {
      biggestIndex = leftIndex
    }
    if (rightIndex < HEAP_SIZE && this.heap[rightIndex] > this.heap[biggestIndex]) {
      biggestIndex = rightIndex
    }
    if (biggestIndex !== index) {
      this.swap(index, biggestIndex, this.heap)
      this.sinkDown(biggestIndex)
    }
  }
}

function solution(n, k, enemy) {
  let round = 0
  const heap = new MaxHeap()

  for (let i = 0; i < enemy.length; i++) {
    heap.insert(enemy[i])
    n -= enemy[i]

    if (n < 0) {
      if (!k) break
      else {
        // 무적권 사용
        const maxValue = heap.getMaxValue()
        n += maxValue
        k--
      }
    }

    round++
  }

  return round
}

const n = 7
const k = 3
const enemy = [4, 2, 4, 5, 3, 3, 1]
console.log(solution(n, k, enemy))

// 우선 병력이 다 줄어들기 전까지 매 라운드 enemy[i]만큼 병력을 쓰고, 쓴 병력을 최대힙에 저장
// 병력을 다 썼을 때 사용가능한 무적권이 없다면 그대로 종료
// 사용가능한 무적권이 남아있다면 힙에서 최대값(가장 많은 병력이 쓰였을 때의 병력 값)을 가져와서
// 해당 값만큼 n에 병력 보충 해주고 그 경우는 무적권을 썼다고 표시(k--)
// 그리고 매 라운드마다 break 안걸리고 잘 넘어갔다면 round++ 해주기
