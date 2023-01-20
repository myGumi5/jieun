const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/* 전역변수 선언 */
let map = {}; //최빈값을 구하기 위한 map 선언
let array = []; //최빈값을 구하기 위한 배열 선언
let most = 0; //최빈값 변수

let N = Number(input.shift());
let numbers = input.map((i) => Number(i)).sort((a, b) => a - b); //숫자배열 오름차순 정렬

//각 숫자들에 대해 map에 {'숫자' : 빈도} 입력
for (let num of numbers) {
  //이미 map의 key에 해당 숫자가 있다면
  if (map[num]) map[num] = map[num] + 1;
  else map[num] = 1;
}

let mostFrequency = Math.max(...Object.values(map)); //map의 value(빈도) 중 최대값 받기

//map의 각 key(숫자들)에 대해
for (let key in map) {
  //value가 최대빈도라면 array에 해당 key 넣기
  if (map[key] === mostFrequency) array.push(key);
}
//최빈값인 숫자가 여러개라면
if (array.length > 1) {
  array = array.sort((a, b) => a - b); //오름차순 정렬하여
  most = array[1]; //1번째 인덱스 수를 최빈값 변수에 넣기(두번째로 작은 수 출력)
} else most = array[0]; //최빈값인 수가 하나라면 바로 해당 수 최빈값 변수에 넣기

//산술평균
let average = Math.round(
  numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0) / N
);
let middle = numbers[Math.floor(N / 2)]; //중앙값
let range = numbers[N - 1] - numbers[0]; //범위

console.log(`${average}\n${middle}\n${most}\n${range}`);
