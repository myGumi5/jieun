let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

input.shift();
input = input.map(Number);

class Heap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    if (!this.heap.length) return true;
    return false;
  }

  swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  insert(value) {
    this.heap.push(value);

    let curIndex = this.heap.length - 1;

    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);

      if (Math.abs(this.heap[curIndex]) > Math.abs(this.heap[parentIndex])) break;
      else if (
        Math.abs(this.heap[curIndex]) === Math.abs(this.heap[parentIndex]) &&
        this.heap[curIndex] > this.heap[parentIndex]
      )
        break;

      this.swap(curIndex, parentIndex, this.heap);
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
    let smallestIndex = index;
    const size = this.heap.length;
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;

    if (leftIndex < size) {
      if (Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[smallestIndex])) smallestIndex = leftIndex;
      else if (
        Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[smallestIndex]) &&
        this.heap[leftIndex] < this.heap[smallestIndex]
      )
        smallestIndex = leftIndex;
    }
    if (rightIndex < size) {
      if (Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[smallestIndex])) smallestIndex = rightIndex;
      else if (
        Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[smallestIndex]) &&
        this.heap[rightIndex] < this.heap[smallestIndex]
      )
        smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      this.swap(smallestIndex, index, this.heap);
      this.sinkDown(smallestIndex);
    }
  }
}

const answer = [];
const heap = new Heap();

input.forEach((x) => {
  if (x === 0) {
    if (heap.isEmpty()) answer.push(0); // 배열이 비어있는 경우 0을 출력
    else answer.push(heap.getMinValue()); // 배열에서 절대값이 가장 작은 값을 출력하고 그 값을 배열에서 제거
  } else {
    heap.insert(x);
  }
});

console.log(answer.join("\n"));
