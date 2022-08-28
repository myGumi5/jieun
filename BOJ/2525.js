const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let now = input.shift().split(" ").map(Number);
const time = Number(input.shift());

let si = now[0] + Math.floor((now[1] + time) / 60);
si = si > 23 ? si % 24 : si;
const bun = (now[1] + time) % 60;

console.log(si, bun);
