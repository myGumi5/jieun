function solution(cacheSize, cities) {
  cities = cities.map((city) => city.toLowerCase());

  let cache = [];
  let answer = 0;

  for (const city of cities) {
    if (cacheSize) {
      if (!cache.includes(city)) {
        if (cache.length === cacheSize) {
          cache.shift();
        }
        cache.push(city);
        answer += 5;
      } else {
        const index = cache.indexOf(city);
        cache.splice(index, 1);
        cache.push(city);
        answer += 1;
      }
    } else {
      answer += 5;
    }
  }

  return answer;
}

// 입출력
const cacheSize = 2;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];
console.log(solution(cacheSize, cities));
