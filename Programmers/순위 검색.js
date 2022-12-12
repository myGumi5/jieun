function solution(info, query) {
  let answer = new Array(query.length).fill(0);
  const map = new Map();

  info.forEach((el) => {
    let infos = el.split(" ");
    const score = infos.pop();
    combination(infos, score, map, 0);
  });

  // 모든 나올 수 있는 조합에서 점수를 오름차순으로 정렬
  for (let key in map) map[key].sort((a, b) => a - b);

  query.forEach((el, index) => {
    let q = el.replace(/ and /g, "").split(" ");
    let score = Number(q.pop());
    answer[index] = binarySearch(map, q[0], score);
  });

  return answer;
}

// info의 모든 단어로 만들수있는 조합들 만들기
function combination(infos, score, map, index) {
  let key = infos.join("");
  let value = map[key]; // 값이 없다면 undefined

  if (value) map[key].push(score);
  else map[key] = [score];

  for (let i = index; i < infos.length; i++) {
    let combArr = [...infos];
    combArr[i] = "-";
    combination(combArr, score, map, i + 1);
  }
}

function binarySearch(map, key, score) {
  let scoreArr = map[key];

  if (scoreArr) {
    let start = 0;
    let end = scoreArr.length;

    while (start < end) {
      let middle = Math.floor((start + end) / 2);

      if (scoreArr[middle] >= score) end = middle;
      else if (scoreArr[middle] < score) start = middle + 1;
    }

    return scoreArr.length - start;
  }

  return 0;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];
console.log(solution(info, query));
