import * as fs from "fs";

const exampleData = fs.readFileSync("day3example.txt", "utf8");
const data = fs.readFileSync("day3.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

// console.log(exampleData);

const scoreArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);
console.log(scoreArray);
function solution(array: string[]) {
  let result = 0;

  const chunkSize = 3;
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    const intersection = chunk[0].split("").filter((x) => chunk[1].includes(x));
    const oneArray = intersection.filter((x) => chunk[2].includes(x));
    let char = oneArray[0];
    if (scoreArray.includes(char)) {
      result += scoreArray.indexOf(char) + 1;
    } else if (scoreArray.includes(char.toLowerCase())) {
      result += scoreArray.indexOf(char.toLowerCase()) + 1 + 26;
    }
  }

  return result;
}

console.log(solution(exampleArray));
console.log(solution(array));
