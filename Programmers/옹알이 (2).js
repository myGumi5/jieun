function solution(babbling) {
  let answer = 0;

  babbling.forEach((word) => {
    word = word.replaceAll("ayaaya", "*");
    word = word.replaceAll("yeye", "*");
    word = word.replaceAll("woowoo", "*");
    word = word.replaceAll("mama", "*");

    word = word.replaceAll("aya", " ");
    word = word.replaceAll("ye", " ");
    word = word.replaceAll("woo", " ");
    word = word.replaceAll("ma", " ");

    if (word.replaceAll(" ", "").length === 0) answer++;
  });

  return answer;
}

const babbling = ["myea"];
console.log(solution(babbling));
