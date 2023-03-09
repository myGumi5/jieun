class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    if (this.heap.length) return false;
    return true;
  }

  swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let curIndex = this.heap.length - 1;
    while (curIndex > 0) {
      const parentIndex = Math.floor((curIndex - 1) / 2);

      if (this.heap[parentIndex][1] <= this.heap[curIndex][1]) break;

      this.swap(curIndex, parentIndex, this.heap);
      curIndex = parentIndex;
    }
  }

  delete() {
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return minValue;
  }

  heapifyDown(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const size = this.heap.length;
    let smallestIndex = index;

    if (leftIndex < size && this.heap[leftIndex][1] < this.heap[smallestIndex][1]) smallestIndex = leftIndex;
    if (rightIndex < size && this.heap[rightIndex][1] < this.heap[smallestIndex][1]) smallestIndex = rightIndex;
    if (smallestIndex !== index) {
      this.swap(index, smallestIndex, this.heap);
      this.heapifyDown(smallestIndex);
    }
  }
}

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [V, _] = input.shift().split(" ").map(Number);
const K = +input.shift();
input = input.map((el) => el.split(" ").map(Number));

const costs = Array(V + 1).fill(Infinity);
const graph = Array.from(Array(V + 1), () => []);

for (const [u, v, w] of input) {
  graph[u].push([v, w]);
}

costs[K] = 0; // 시작점의 비용 0으로 초기화
const heap = new MinHeap();
heap.insert([K, 0]); // 정점과 비용 heap 삽입

while (!heap.isEmpty()) {
  const curNode = heap.delete();

  // 다익스트라
  for (let i = 0; i < graph[curNode[0]].length; i++) {
    const [v, c] = graph[curNode[0]][i];

    if (costs[v] > curNode[1] + c) {
      costs[v] = curNode[1] + c;
      heap.insert([v, costs[v]]);
    }
  }
}

costs.shift();
const answer = [];
costs.forEach((v) => {
  if (v === Infinity) answer.push("INF");
  else answer.push(v);
});

console.log(answer.join("\n"));
