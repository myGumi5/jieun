function solution(cipher, code) {
  return cipher
    .split("")
    .filter((c, i) => (i + 1) % code === 0)
    .join("");
}
