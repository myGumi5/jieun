function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    if (!stack.length) {
      stack.push(num);
      continue;
    }

    while (k > 0 && num > stack[stack.length - 1]) {
      stack.pop();
      k--;
    }

    stack.push(num);
  }

  stack.splice(stack.length - k, k);
  return stack.join("");
}

const number = "4291";
const k = 2;
console.log(solution(number, k));
