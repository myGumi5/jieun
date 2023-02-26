let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

input.shift();
input = input.map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    if (this.heap.length) return false;
    else return true;
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

      if (this.heap[parentIndex] <= this.heap[curIndex]) break;

      this.swap(parentIndex, curIndex, this.heap);
      curIndex = parentIndex;
    }
  }

  getMinValue() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return minValue;
  }

  sinkDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const length = this.heap.length;

    let smallestIndex = index;

    if (leftIndex < length && this.heap[leftIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftIndex;
    }
    if (rightIndex < length && this.heap[rightIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightIndex;
    }
    // 제일 작은 값의 인덱스가 바뀌었다면
    if (smallestIndex !== index) {
      this.swap(index, smallestIndex, this.heap);
      this.sinkDown(smallestIndex);
    }
  }
}

const answer = [];
const heap = new MinHeap();

input.forEach((command) => {
  if (command === 0) {
    if (heap.isEmpty()) answer.push(0);
    else answer.push(heap.getMinValue());
  } else {
    heap.insert(command);
  }
});

console.log(answer.join("\n"));
