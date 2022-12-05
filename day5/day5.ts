import * as fs from "fs";
import { it } from "node:test";

const exampleData = fs.readFileSync("day5example.txt", "utf8");
const data = fs.readFileSync("day5.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

console.log(exampleArray);

function solution(array: string[]) {
  var object: { [k: string]: string[] } = {};
  const numArray = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const index = array.indexOf("");
  const resultArray = [];
  for (let i = 0; i < index - 1; i++) {
    let correctArray = [];
    const arr = array[i].split(" ");
    let j = 0;
    while (j < arr.length) {
      if (arr[j] === "") {
        correctArray.push("empty");
        j += 4;
      } else {
        correctArray.push(arr[j]);
        j += 1;
      }
    }
    resultArray.push(correctArray);

    for (let i = 0; i < numArray.length; i++) {
      object[numArray[i]] = [];
    }

    for (let i = 0; i < resultArray.length; i++) {
      resultArray[i].map((value, index) => {
        const string = (index + 1).toString();
        const arrayNum = object[string];
        if (value !== "empty") {
          arrayNum.unshift(value);
        }
      });
    }
  }

  for (let i = index + 1; i < array.length; i++) {
    const arr = array[i].split(" ");
    const itemsNumber = parseInt(arr[1]);
    const fromColumn = parseInt(arr[3]);
    const toColumn = parseInt(arr[5]);
    const fromArray = object[fromColumn.toString()];
    const toArray = object[toColumn.toString()];
    const slice = fromArray.splice(fromArray.length - itemsNumber, itemsNumber);
    toArray.splice(toArray.length, 0, ...slice);
  }

  const result = Object.values(object)
    .filter((arr) => arr.length)
    .map((arr) => {
      const letter = arr.pop();
      return letter.split("")[1];
    });
  return result.join("");
}

console.log(solution(exampleArray));
console.log(solution(array));
