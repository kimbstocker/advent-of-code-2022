import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day10example.txt", "utf8");
const data = fs.readFileSync("day10.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

// console.log(exampleArray);

function solution(array: string[]) {
  const results = [];
  let count = 1;
  let value = 1;
  for (let x = 0; x < array.length; x++) {
    const instructions = array[x].split(" ");
    let num = 0;
    if (instructions[1]) {
      num = parseInt(instructions[1]);
    }

    // console.log("This is num", num);
    let text = instructions[0];

    if (text === "noop") {
      if (count === 20 || (count - 20) % 40 === 0) {
        let signalStrenth = count * value;
        // console.log("this is count", count);
        // console.log("this is signal strengh", signalStrenth);
        results.push(signalStrenth);
      }
      count += 1;

      continue;
    } else if (text === "addx") {
      for (let i = 0; i < 2; i++) {
        if (count === 20 || (count - 20) % 40 === 0) {
          let signalStrenth = count * value;
          //   console.log("this is count", count);
          //   console.log("this is signal strengh", signalStrenth);
          results.push(signalStrenth);
        }
        count += 1;
      }
      value += num;
    }

    // console.log("This is value", value);
  }

  const result = results.reduce((total, num) => {
    return total + num;
  }, 0);

  return result;
}

function solution2(array: string[]) {
  console.log("This is array length", array.length);
  const results = [];
  let count = 0;
  let value = 1;
  for (let x = 0; x < array.length; x++) {
    const instructions = array[x].split(" ");
    let num = 0;
    if (instructions[1]) {
      num = parseInt(instructions[1]);
    }

    let text = instructions[0];

    if (text === "noop") {
      if (value === count || value + 1 === count || value - 1 === count) {
        results.push("#");
      } else {
        results.push(".");
      }
      if (count === 39) {
        count = 0;
      } else {
        count += 1;
      }
      continue;
    } else if (text === "addx") {
      for (let i = 0; i < 2; i++) {
        if (value === count || value + 1 === count || value - 1 === count) {
          results.push("#");
        } else {
          results.push(".");
        }
        if (count === 39) {
          count = 0;
        } else {
          count += 1;
        }
      }
      value += num;
    }

    // console.log("this is count", count);
  }

  console.log(results.slice(0, 39).join(""));
  console.log(results.slice(40, 79).join(""));
  console.log(results.slice(80, 119).join(""));
  console.log(results.slice(120, 159).join(""));
  console.log(results.slice(160, 199).join(""));
  console.log(results.slice(200, 239).join(""));

  return results.length;
}

// console.log(solution(exampleArray));
// console.log(solution(array));

console.log(solution2(exampleArray));
console.log(solution2(array));
