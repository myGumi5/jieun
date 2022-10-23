function solution(my_string) {
  return my_string
    .split("")
    .map((el) => (el >= "A" && el <= "Z" ? el.toLowerCase() : el.toUpperCase()))
    .join("");
}

const my_string = "abCdEfghIJ";
console.log(solution(my_string));
