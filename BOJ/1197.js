const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [V, E] = input
  .shift()
  .split(" ")
  .map((el) => +el);
input = input.map((el) => el.split(" ").map((el) => +el));

input.sort((a, b) => a[2] - b[2]);

let answer = 0;
let parent = [];
for (let i = 1; i <= V; i++) parent.push(i);

const getParent = (parent, v) => {
  if (parent[v - 1] === v) return v;
  else return (parent[v - 1] = getParent(parent, parent[v - 1]));
};

const compareParent = (parent, v1, v2) => {
  const parentOfV1 = getParent(parent, v1);
  const parentOfV2 = getParent(parent, v2);

  if (parentOfV1 === parentOfV2) return true;
  else return false;
};

const unionParent = (parent, v1, v2) => {
  const parentOfV1 = getParent(parent, v1);
  const parentOfV2 = getParent(parent, v2);

  if (parentOfV1 > parentOfV2) return (parent[parentOfV1 - 1] = parentOfV2);
  else return (parent[parentOfV2 - 1] = parentOfV1);
};

for (const node of input) {
  if (!compareParent(parent, node[0], node[1])) {
    answer += node[2];
    unionParent(parent, node[0], node[1]);
  }
}

console.log(answer);
