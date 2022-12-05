import * as fs from "fs";

const exampleData = fs.readFileSync("day1example.txt", "utf8");
const data = fs.readFileSync("day1.txt", "utf8");

const solve1 = (input: string): number => {
  const array = input.split(/\n\n/);

  let result = 0;

  array.map((str) => {
    const smallArray = str.split("\n");
    let tempResult = smallArray.reduce((total, num) => {
      return total + parseInt(num);
    }, 0);

    if (tempResult > result) {
      result = tempResult;
    }
  });
  return result;
};

const solve2 = (input: string): number => {
  const array = input.split(/\n\n/);

  let results: number[] = [];

  array.map((str) => {
    const smallArray = str.split("\n");
    const tempResult = smallArray.reduce((total, num) => {
      return total + parseInt(num);
    }, 0);

    if (results.length < 1) {
      results.push(tempResult);
    } else {
      for (let i = 0; i < results.length; i++) {
        if (tempResult > results[i]) {
          results.splice(i, 0, tempResult);
          break;
        }
      }
      if (results.length > 3) {
        results.pop();
      }
    }
  });
  const result = results.reduce((total, num) => {
    return total + num;
  }, 0);

  return result;
};

// console.log(solve1(exampleData));
// console.log(solve1(data));

console.log(solve2(exampleData));
console.log(solve2(data));
