let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let index = 0;
let T = +input[index++];
let answer = "";

class Heap {
  constructor(flag) {
    this.heap = [];
    this.compare = (a, b) => {
      return flag ? a < b : a > b;
    };
  }

  isEmpty() {
    if (this.heap.length) return false;
    return true;
  }

  enqueue(value) {
    this.heap.push(value);

    let curIndex = this.heap.length - 1;

    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);

      if (!this.compare(this.heap[parentIndex], this.heap[curIndex])) break;

      [this.heap[curIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[curIndex]];
      curIndex = parentIndex;
    }
  }

  dequeue() {
    if (this.heap.length <= 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return value;
  }

  heapifyDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    let curIndex = index;

    if (leftIndex < this.heap.length && this.compare(this.heap[curIndex], this.heap[leftIndex])) curIndex = leftIndex;
    if (rightIndex < this.heap.length && this.compare(this.heap[curIndex], this.heap[rightIndex]))
      curIndex = rightIndex;

    if (curIndex !== index) {
      [this.heap[curIndex], this.heap[index]] = [this.heap[index], this.heap[curIndex]];
      this.heapifyDown(curIndex);
    }
  }
}

class DoublePriorityQueue {
  constructor() {
    this.maxHeap = new Heap(true);
    this.minHeap = new Heap(false);
    this.valid = new Map();
  }

  push(value) {
    this.maxHeap.enqueue(value);
    this.minHeap.enqueue(value);

    if (this.valid.has(value)) this.valid.set(value, this.valid.get(value) + 1);
    else this.valid.set(value, 1);
  }

  pop(flag) {
    const heap = flag === 1 ? this.maxHeap : this.minHeap;

    while (!heap.isEmpty()) {
      const popped = heap.dequeue();

      // 이미 유효하지 않은 수이면 패쓰
      if (!this.valid.has(popped)) continue;

      if (this.valid.get(popped) === 1) this.valid.delete(popped);
      else this.valid.set(popped, this.valid.get(popped) - 1);
      return popped;
    }
  }
}

while (T--) {
  const queue = new DoublePriorityQueue();
  const k = +input[index++];

  for (let i = 0; i < k; i++) {
    let command = input[index++].split(" ");

    if (command[0] === "I") queue.push(+command[1]);
    else queue.pop(+command[1]);
  }

  const max = queue.pop(1);
  const min = queue.pop(-1) || max;

  if (max) answer += `${max} ${min}\n`;
  else answer += "EMPTY\n";
}

console.log(answer);
