let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

input.shift();
input = input.map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    if (!this.heap.length) return true;
    return false;
  }

  swap(index1, index2, arr) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);

    let curIndex = this.heap.length - 1;

    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);

      if (this.heap[curIndex] <= this.heap[parentIndex]) break;

      this.swap(curIndex, parentIndex, this.heap);
      curIndex = parentIndex;
    }
  }

  getMaxValue() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return maxValue;
  }

  sinkDown(index) {
    let biggestIndex = index;
    const size = this.heap.length;
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    if (leftIndex < size && this.heap[leftIndex] > this.heap[biggestIndex]) {
      biggestIndex = leftIndex;
    }
    if (rightIndex < size && this.heap[rightIndex] > this.heap[biggestIndex]) {
      biggestIndex = rightIndex;
    }

    if (biggestIndex !== index) {
      this.swap(index, biggestIndex, this.heap);
      this.sinkDown(biggestIndex);
    }
  }
}

const answer = [];
const heap = new MaxHeap();

input.forEach((x) => {
  if (x === 0) {
    if (heap.isEmpty()) answer.push(0);
    else answer.push(heap.getMaxValue()); // 배열에서 가장 큰 값을 출력하고 그 값을 배열에서 삭제
  } else {
    heap.insert(x);
  }
});

console.log(answer.join("\n"));
