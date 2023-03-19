function solution(food) {
  food = food.map((el) => Math.floor(el / 2));
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    let count = food[i];
    while (count--) {
      answer += i;
    }
  }

  answer += "0" + [...answer].reverse().join("");
  return answer;
}

const food = [1, 7, 1, 2];
console.log(solution(food));
