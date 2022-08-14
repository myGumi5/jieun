const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());

const node = {}; // 입력값들을 넣을 객체

for (let i = 0; i < N; i++) {
  const [root, left, right] = input[i].split(" ");
  node[root] = [left, right];
}

let answer = "";

// 전위 순회
const preorder = (start) => {
  if (start === ".") return;
  const [L, R] = node[start];
  answer += start;
  preorder(L);
  preorder(R);
};

// 중위 순회
const inorder = (start) => {
  if (start === ".") return;
  const [L, R] = node[start];
  inorder(L);
  answer += start;
  inorder(R);
};

// 후위 순회
const postorder = (start) => {
  if (start === ".") return;
  const [L, R] = node[start];
  postorder(L);
  postorder(R);
  answer += start;
};

preorder("A");
answer += "\n";
inorder("A");
answer += "\n";
postorder("A");

console.log(answer);
