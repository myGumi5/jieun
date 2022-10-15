function solution(survey, choices) {
  const score = [0, 3, 2, 1, 0, 1, 2, 3];
  let type = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((surv, i) => {
    const choice = choices[i];
    const [disagree, agree] = surv.split("");

    if (choice > 4) type[agree] += score[choice]; // 동의형
    else if (choice < 4) type[disagree] += score[choice]; // 비동의형
  });

  let answer = "";
  answer += type["R"] >= type["T"] ? "R" : "T";
  answer += type["C"] >= type["F"] ? "C" : "F";
  answer += type["J"] >= type["M"] ? "J" : "M";
  answer += type["A"] >= type["N"] ? "A" : "N";

  return answer;
}

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));
