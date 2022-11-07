let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [t, ...truth] = input.shift().split(" ").map(Number);
const parties = input.map((el) => el.split(" ").map(Number));

// 부모 배열 자기자신으로 초기화
let parents = Array(N + 1);
for (let i = 0; i <= N; i++) parents[i] = i;

// 진실을 아는 사람들의 부모를 0으로 통일
for (let i = 0; i < t; i++) {
  parents[truth[i]] = 0;
}

parties.forEach((party) => {
  const [n, ...nums] = party;

  // 파티 참석자들의 부모를 연결하기
  for (let i = 0; i < n - 1; i++) {
    const p1 = getParent(nums[i]);
    const p2 = getParent(nums[i + 1]);

    if (p1 === p2) continue;
    // 진실을 아는 사람들의 부모를 0으로 맞춰줘야 하므로 대소비교 해야함
    if (p1 > p2) parents[p1] = p2;
    else parents[p2] = p1;
  }
});

let answer = 0;
parties.forEach((party) => {
  const [n, ...nums] = party;

  for (let i = 0; i < n; i++) {
    // 진실을 모르는 사람이 있을 경우
    if (getParent(nums[i]) !== 0) {
      answer++;
      break;
    }
  }
});

function getParent(n) {
  if (parents[n] === n) return n;
  // 경로압축
  return (parents[n] = getParent(parents[n]));
}

console.log(answer);
