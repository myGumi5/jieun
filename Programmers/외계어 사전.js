function solution(spell, dic) {
  let flag = false; // dic 중에서 조건에 만족하는 것이 있는지 체크

  dic.forEach((word) => {
    let temp = word;

    spell.forEach((s) => {
      temp = temp.replace(s, ""); // spell의 단어를 한번씩 포함됐는지 체크
    });

    // spell의 단어를 word에서 한번씩만 사용해서 word를 빈 문자열로 만들었다면
    if (spell.length === word.length && temp.length === 0) flag = true;
  });

  return flag ? 1 : 2;
}

const spell = ["s", "o", "m", "d"];
const dic = ["moos", "dzx", "smm", "sunmmo", "som"];
console.log(solution(spell, dic));
