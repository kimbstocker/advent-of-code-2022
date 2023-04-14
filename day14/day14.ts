import { clear } from "console";
import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day14example.txt", "utf8");
const data = fs.readFileSync("day14.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

console.log(exampleArray);

function solution(array: string[]) {
  let set = new Set<String>();
  //   let matrix = new Array(1);

  //   for (var i = 0; i < matrix.length; i++) {
  //     matrix[i] = new Array();
  //   }

  //   console.log("This is new Matrix", matrix);
  let maxY = 1;

  array.forEach((arr) => {
    const smallArr = arr.split(" -> ").map((e) => e.split(","));
    const numarr = smallArr.map((arr) => arr.map((num) => parseInt(num)));

    const max = Math.max(...numarr.map((arr) => arr[1]));
    if (max > maxY) {
      maxY = max;
    }
  });

  console.log("this is maxY", maxY);

  array.forEach((arr) => {
    const smallArr = arr.split(" -> ").map((e) => e.split(","));
    const numarr = smallArr.map((arr) => arr.map((num) => parseInt(num)));

    console.log("this is numarr", numarr);

    for (let i = 0; i < numarr.length - 1; i++) {
      let x1 = numarr[i][0];
      let y1 = numarr[i][1];
      let x2 = numarr[i + 1][0];
      let y2 = numarr[i + 1][1];

      let xgap = Math.abs(x1 - x2);
      let ygap = Math.abs(y1 - y2);

      if (xgap > 0 && ygap === 0) {
        const fromX = Math.min(x1, x2);
        const toX = Math.max(x1, x2);
        for (let x = fromX; x <= toX; x++) {
          set.add(`${x},${y1}`);
        }
      }

      if (ygap > 0 && xgap === 0) {
        const fromY = Math.min(y1, y2);
        const toY = Math.max(y1, y2);
        for (let y = fromY; y <= toY; y++) {
          set.add(`${x1},${y}`);
        }
      }
      // console.log("this is xgap", xgap);
      // console.log("this is ygap", ygap);
    }
  });

  console.log("This is set", set);

  let copyOfSet = new Set([...set]);

  function check(sandx: number, sandy: number): number[] {
    // let sandx = x;
    // let sandy = y;

    let didMove = true;
    while (didMove) {
      didMove = false;

      if (sandy >= maxY + 1) {
        break;
      }

      if (!set.has(`${sandx},${sandy + 1}`)) {
        sandy += 1;
        didMove = true;
      } else if (!set.has(`${sandx - 1},${sandy + 1}`)) {
        sandx = sandx - 1;
        sandy = sandy + 1;
        didMove = true;
      } else if (!set.has(`${sandx + 1},${sandy + 1}`)) {
        sandx = sandx + 1;
        sandy = sandy + 1;
        didMove = true;
      }
    }

    // if (set.has(`${sandx},${sandy}`)) {
    //   return set;
    // }

    return [sandx, sandy];
    //console.log("this is set", set);
  }

  let sand = 0;
  while (true) {
    const position = check(500, 0);
    if (position[0] === 500 && position[1] === 0) {
      sand += 1;
      for (let y = 0; y < 10; y++) {
        for (let x = 490; x < 510; x++) {
          if (set.has(`${x},${y}`)) {
            process.stdout.write("#");
          } else {
            process.stdout.write(".");
          }
        }
        process.stdout.write("\n");
      }

      return sand;
    } else {
      sand += 1;
      set.add(`${position[0]},${position[1]}`);
    }
  }

  let a_minus_b = new Set([...set].filter((x) => copyOfSet.has(x)));

  return a_minus_b.size;
}

// console.log(solution(exampleArray));
console.log(solution(array));

// console.log(solution2(exampleArray));
// console.log(solution2(array));
