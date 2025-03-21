import * as fs from "fs";

const exampleData = fs.readFileSync("example.txt", "utf8");
const data = fs.readFileSync("data.txt", "utf8");

const solve1 = (input: string): number => {
  const array = input.split(/\n\n/);
  const smallArray = array[0].split("\n");

  let result = 0;

  console.log(smallArray);

  smallArray.map((str) => {
    let tempResult = [];
    for (let i = 0; i < str.length; i++) {
      if (Number(str[i])) {
        tempResult.push(str[i]);
        break;
      }
    }
    for (let i = str.length - 1; i >= 0; i--) {
      if (Number(str[i])) {
        tempResult.push(str[i]);
        break;
      }
    }
    console.log(tempResult.join(""));

    result += Number(tempResult.join(""));
  });
  return result;
};

const convertToNum = (text) => {
  if (text === "one") {
    return "1";
  }
  if (text === "two") {
    return "2";
  }
  if (text === "three") {
    return "3";
  }
  if (text === "four") {
    return "4";
  }
  if (text === "five") {
    return "5";
  }
  if (text === "six") {
    return "6";
  }
  if (text === "seven") {
    return "7";
  }
  if (text === "eight") {
    return "8";
  }
  if (text === "nine") {
    return "9";
  }
};

const solve2 = (input: string): number => {
  const array = input.split(/\n\n/);
  const smallArray = array[0].split("\n");

  const textNum = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let result = 0;

  //   console.log(smallArray);
  smallArray.map((str) => {
    let secondNumberList = [];
    let firstNumberList = [];
    let firstSetPosition = [];
    let secondSetPosition = [];
    let finalNum = [null, null];

    textNum.forEach((num) => {
      if (str.includes(num)) {
        firstNumberList.push([num, str.indexOf(num)]);
        secondNumberList.push([num, str.lastIndexOf(num)]);
        firstSetPosition.push(str.indexOf(num));
        secondSetPosition.push(str.lastIndexOf(num));
      }
    });

    for (let i = 0; i < firstNumberList.length; i++) {
      const min = Math.min(...firstSetPosition);
      if (firstNumberList[i][1] !== min) {
        continue;
      }
      if (firstNumberList[i][1] === min) {
        if (Number(firstNumberList[i][0])) {
          finalNum[0] = firstNumberList[i][0];
        } else {
          finalNum[0] = convertToNum(firstNumberList[i][0]);
        }
      }
    }
    for (let i = 0; i < secondNumberList.length; i++) {
      const max = Math.max(...secondSetPosition);
      if (secondNumberList[i][1] !== max) {
        continue;
      }
      if (secondNumberList[i][1] === max) {
        if (Number(secondNumberList[i][0])) {
          finalNum[1] = secondNumberList[i][0];
        } else {
          finalNum[1] = convertToNum(secondNumberList[i][0]);
        }
      }
    }

    result += Number(finalNum.join(""));
  });
  return result;
};

// console.log(solve2(exampleData));
console.log(solve2(data));
