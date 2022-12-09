function solution(n, k, cmd) {
  let answer = new Array(n).fill("O");
  let root = new Node(0);
  let curNode = root;
  let prevNode = root;

  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;

    if (i === k) curNode = newNode;
  }

  let deleted = [];

  cmd.map((commandLine) => {
    const [command, count] = commandLine.split(" ");
    let i = 0;

    switch (command) {
      case "U":
        while (i < count && curNode.prev) {
          curNode = curNode.prev; // 위로 올라가는 것이므로 이전 노드를 가리키게
          i++;
        }
        break;
      case "D":
        while (i < count && curNode.next) {
          curNode = curNode.next; // 밑으로 내려가는 것이므로 다음 노드를 가리키게
          i++;
        }
        break;
      case "C":
        deleted.push(curNode);
        const prev = curNode.prev;
        const next = curNode.next;

        // 현재 노드의 이전, 다음이 다 있는 경우
        if (prev && next) {
          prev.next = next;
          next.prev = prev;
          curNode = next; // 삭제 후에는 바로 아랫 행을 가리키게
        }
        // 마지막 노드인경우
        else if (prev) {
          prev.next = null;
          curNode = prev; // 삭제 후에는 바로 윗 행을 가리키게
        }
        // 첫번째 노드인경우
        else {
          next.prev = null;
          curNode = next;
        }
        break;
      case "Z":
        const node = deleted.pop();
        const prevNode = node.prev;
        const nextNode = node.next;

        if (prevNode) prevNode.next = node;
        if (nextNode) nextNode.prev = node;

        break;
    }
  });

  deleted.map((node) => {
    answer[node.index] = "X";
  });

  return answer.join("");
}

class Node {
  constructor(index, prevNode) {
    this.index = index;
    this.prev = prevNode;
    this.next;
  }
}

// const Node = function (index, prevNode) {
//   this.index = index;
//   this.prev = prevNode;
//   this.next;
// };

const n = 8;
const k = 2;
const cmd = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];
console.log(solution(n, k, cmd));
