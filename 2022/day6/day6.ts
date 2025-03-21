import * as fs from "fs";
import { it } from "node:test";

const exampleData = fs.readFileSync("day6example.txt", "utf8");
const data = fs.readFileSync("day6.txt", "utf8");

const exampleArray = exampleData.split("");
const array = data.split("");

console.log(exampleArray);

function solution(array: string[]) {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    let arr = [];

    for (let j = 0; j < 14; j++) {
      arr.push(array[i + j]);
    }
    // const arr = [array[i], array[i + 1], array[i + 2], array[i + 3]];

    console.log("this is unique", arr);
    const unique = Array.from(new Set(arr));

    if (unique.length === 14) {
      j = i + 14;
      break;
    }
  }
  return j;
}

console.log(solution(exampleArray));
console.log(solution(array));
