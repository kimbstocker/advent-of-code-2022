import * as fs from "fs";
import { start } from "repl";

const exampleData = fs.readFileSync("example.txt", "utf8");
const data = fs.readFileSync("data.txt", "utf8");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const isSymbol = (char) => {
  return char !== "." && !numbers.includes(char);
};
const testNum = (a, b, x, array, num) => {
  let startNum = a - 1;
  let endNum = b;

  if (a === 0) {
    startNum = 0;
  }

  if (isSymbol(array[x][startNum]) || isSymbol(array[x][endNum])) {
    return num;
  }

  //   console.log("start-num", startNum);
  //   console.log("endNum", endNum);

  let verticleStart = x - 1;
  let verticleEnd = x + 1;

  if (x === 0) {
    verticleStart = x;
  }

  if (x === array.length - 1) {
    verticleEnd = x;
  }
  for (let j = startNum; j < endNum + 1; j++) {
    if (isSymbol(array[verticleStart][j])) {
      return num;
    }
  }
  for (let m = startNum; m < endNum + 1; m++) {
    if (isSymbol(array[verticleEnd][m])) {
      return num;
    }
  }

  //   for (let i = verticleStart; i <= verticleEnd; i++) {
  //     for (let j = startNum; j <= endNum; j++) {
  //       if (chars.includes(array[i][j])) {
  //         return num;
  //       }
  //     }
  //   }
};

const solve1 = (input: string): number => {
  const array = input.split(/\n/);
  let result = 0;

  for (let x = 0; x < array.length; x++) {
    const line = array[x];
    const lineArr = line.split("");
    let numList = [];

    for (let y = 0; y < lineArr.length; y++) {
      const char = lineArr[y];
      //   console.log("char", char);
      if (char === "*") {
        let num1array = [];
        let num1: number = 1;
        let num2: number = 1;
        let num2Array = [];
        for (let i = y; i >= 0; i--) {
          if (Number(lineArr[i]) || Number(lineArr[i]) === 0) {
            num1array.push(lineArr[i]);
          } else {
            if (num1array.length === 0) {
              continue;
            } else {
              num1 = Number(num1array.join(""));
              num1array = [];
            }
          }
        }
        for (let i = y; i < lineArr.length; i++) {
          if (Number(lineArr[i]) || Number(lineArr[i]) === 0) {
            num2Array.push(lineArr[i]);
          } else {
            if (num2Array.length === 0) {
              continue;
            } else {
              num2 = Number(num2Array.join(""));
              num2Array = [];
            }
          }
        }
        let num3: number;
        let num4: number;
        let num3Array;
        let num4Array;

        let verticleStart = x - 1;
        let verticleEnd = x + 1;

        if (x === 0) {
          verticleStart = 0;
        }
        if (x === array.length - 1) {
          verticleEnd = x;
        }
        const topArray = array[verticleStart].split("");

        let topNumArr = [];
        let topNum: number;
        for (let i = y; i >= 0; i--) {
          if (Number(topArray[i]) || Number(topArray[i]) === 0) {
            topNumArr.unshift(topArray[i]);
          } else {
            break;
          }
        }
        for (let i = y; i < topArray.length; i++) {
          if (Number(topArray[i]) || Number(topArray[i]) === 0) {
            topNumArr.push(topArray[i]);
          } else {
            break;
          }
        }
        topNum = Number(topNumArr.join(""));
        topNumArr = [];

        const bottomArray = array[verticleEnd].split("");

        let bottomNumArr = [];
        let bottomNum: number;
        for (let i = y; i >= 0; i--) {
          if (Number(bottomArray[i]) || Number(bottomArray[i]) === 0) {
            bottomNumArr.unshift(bottomArray[i]);
          } else {
            break;
          }
        }
        for (let i = y; i < bottomArray.length; i++) {
          if (Number(bottomArray[i]) || Number(bottomArray[i]) === 0) {
            bottomNumArr.push(bottomArray[i]);
          } else {
            break;
          }
        }

        bottomNum = Number(bottomNumArr.join(""));
        bottomNumArr = [];
        result = num1 * num2 * topNum * bottomNum;
      }
    }
  }

  return result;
};

console.log(solve1(exampleData));
// console.log(solve1(data));
