import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day8example.txt", "utf8");
const data = fs.readFileSync("day8.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

console.log(exampleArray);

function solution(array: string[]) {
  const arrayLength = array.length;
  let result = arrayLength * 2 + (arrayLength - 2) * 2;
  const matrix = array.map((str) => {
    return str.split("").map((i) => parseInt(i));
  });
  console.log("this is location array", matrix[1][0]);

  let loopcount = 1;
  for (let x = 1; x < arrayLength - 1; x++) {
    for (let y = 1; y < matrix[x].length - 1; y++) {
      const num = matrix[x][y];
      const rowLeftSlice = matrix[x].slice(0, y);
      const maxLeft = Math.max(...rowLeftSlice);
      if (num > maxLeft) {
        result += 1;
        continue;
      }
      const rowRightSlice = matrix[x].slice(y + 1, arrayLength);

      const maxRight = Math.max(...rowRightSlice);
      if (num > maxRight) {
        result += 1;
        continue;
      }

      const columnArray = Array.from({ length: arrayLength }, (_, i) => i).map(
        (z) => matrix[z][y]
      );

      const columnUpSlice = columnArray.slice(0, x);
      const maxUp = Math.max(...columnUpSlice);

      if (num > maxUp) {
        result += 1;
        continue;
      }

      const columnDownSlice = columnArray.slice(x + 1, arrayLength);
      const maxDown = Math.max(...columnDownSlice);

      if (num > maxDown) {
        result += 1;
        continue;
      }
    }
  }
  return result;
}

function findNum(num, array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= num) {
      return count + 1;
    }
    count += 1;
  }

  return count;
}

function solution2(array: string[]) {
  const arrayLength = array.length;
  let result = [];
  const matrix = array.map((str) => {
    return str.split("").map((i) => parseInt(i));
  });

  for (let x = 1; x < arrayLength - 1; x++) {
    for (let y = 1; y < matrix[x].length - 1; y++) {
      let smallarr = [];
      const num = matrix[x][y];
      const rowLeftSlice = matrix[x].slice(0, y);

      const viewLeft = findNum(num, rowLeftSlice.reverse());
      smallarr.push(viewLeft);
      const rowRightSlice = matrix[x].slice(y + 1, arrayLength);
      const viewRight = findNum(num, rowRightSlice);
      smallarr.push(viewRight);

      const columnArray = [...Array(arrayLength).keys()].map(
        (z) => matrix[z][y]
      );

      const columnUpSlice = columnArray.slice(0, x);
      const viewUp = findNum(num, columnUpSlice.reverse());
      smallarr.push(viewUp);

      const columnDownSlice = columnArray.slice(x + 1, arrayLength);
      const viewDown = findNum(num, columnDownSlice);
      smallarr.push(viewDown);

      console.log("this is the smallarr", smallarr);
      const smallResult = smallarr.reduce((total, num) => {
        return total * num;
      }, 1);
      result.push(smallResult);
    }
  }
  return Math.max(...result);
}

// console.log(solution(exampleArray));
// console.log(solution(array));

console.log(solution2(exampleArray));
console.log(solution2(array));
