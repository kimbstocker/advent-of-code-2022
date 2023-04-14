import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day13example.txt", "utf8");
const data = fs.readFileSync("day13.txt", "utf8");

const exampleArray = exampleData.split(/\n\n/);
const array = data.split(/\n\n/);

// console.log(exampleArray);

function compareValues(left: any, right: any): number {
  if (typeof left === "number" && typeof right === "number") {
    return left - right;
  } else if (typeof left === "number") {
    return compareValues([left], right);
  } else if (typeof right === "number") {
    return compareValues(left, [right]);
  } else {
    const length = Math.min(left.length, right.length);
    for (let index = 0; index < length; index++) {
      const a = left[index];
      const b = right[index];
      const compare = compareValues(a, b);
      if (compare !== 0) {
        return compare;
      }
    }
    return left.length - right.length;
  }
}

function checkNumbers(num1, num2) {
  if (num1 > num2) {
    return false;
  }
}

function solution(array: string[]) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let str = array[i].split("\n");
    const group = str.map((string) => {
      const arr = JSON.parse(string);
      return arr;
    });

    if (compareValues(group[0], group[1]) <= 0) {
      result.push(i + 1);
    }

    console.log("this is group", group);
  }
  return result.reduce((total, num) => total + num, 0);
}

function solution2(array: string[]) {
  let result = [];

  let key1 = [[2]];
  let key2 = [[6]];

  result.push(key1);
  result.push(key2);

  for (let i = 0; i < array.length; i++) {
    let str = array[i].split("\n");
    const group = str.map((string) => {
      const arr = JSON.parse(string);
      result.push(arr);
    });
  }

  result.sort((a, b) => compareValues(a, b));

  console.log("this is group", result.length);

  const a = result.indexOf(key1) + 1;
  const b = result.indexOf(key2) + 1;

  return a * b;
}

// console.log(solution(exampleArray));
// console.log(solution(array));

console.log(solution2(exampleArray));
console.log(solution2(array));
