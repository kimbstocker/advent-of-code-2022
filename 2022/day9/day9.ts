import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day9example.txt", "utf8");
const data = fs.readFileSync("day9.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

console.log(exampleArray);

function tailmove(x, y, i, j) {
  if (x === i && y === j) {
    return [i, j];
  }

  const xDiff = Math.abs(x - i);
  const yDiff = Math.abs(y - j);

  if (xDiff <= 1 && yDiff <= 1) {
    return [i, j];
  }

  if (x > i) {
    i += 1;
  }

  if (x < i) {
    i -= 1;
  }

  if (y > j) {
    j += 1;
  }

  if (y < j) {
    j -= 1;
  }

  return [i, j];

  //   const xDiff = Math.abs(x - i);
  //   const yDiff = Math.abs(y - j);
  //   if (xDiff > 1 && y === j) {
  //     if (i < 0) {
  //       i = i - 1;
  //     } else {
  //       i = i + 1;
  //     }
  //   } else if (yDiff > 1 && x === i) {
  //     if (j < 0) {
  //       j = j - 1;
  //     } else {
  //       j = j + 1;
  //     }
  //   } else if (xDiff > 1 && yDiff === 1) {
  //     if (i < 0) {
  //       i = i - 1;
  //     } else {
  //       i = i + 1;
  //     }
  //     if (j < 0) {
  //       j = j - 1;
  //     } else {
  //       j = j + 1;
  //     }
  //   } else if (xDiff === 1 && yDiff > 1) {
  //     if (j < 0) {
  //       j = j - 1;
  //     } else {
  //       j = j + 1;
  //     }
  //     if (i < 0) {
  //       i = i - 1;
  //     } else {
  //       i = i + 1;
  //     }
  //   }
  //   return [i, j];
}

// function solution(array: string[]) {
//   let result = ["0,0"];

//   let x = 0;
//   let y = 0;
//   let i = 0;
//   let j = 0;

//   array.forEach((element) => {
//     const arr = element.split(" ");
//     const direction = arr[0];
//     const num = parseInt(arr[1]);
//     for (let move = 0; move < num; move++) {
//       let prevx = x;
//       let prevy = y;

//       switch (direction) {
//         case "R":
//           x += 1;
//           break;
//         case "L":
//           x -= 1;
//           break;
//         case "U":
//           y += 1;
//           break;
//         case "D":
//           y -= 1;
//           break;
//       }
//       if (tailmove(x, y, i, j)) {
//         i = prevx;
//         j = prevy;
//         result.push(`${i},${j}`);
//       }
//     }
//   });

//   const sol = new Set(result);
//   return sol.size;
// }

function solution2(array: string[]) {
  let result = ["0,0"];

  const tempArr = [...Array(9).keys()].map((z) => z);

  const prevMovesArr = tempArr.map((e) => {
    return [0, 0];
  });

  //   console.log("this is prevMovesArr", prevMovesArr);
  let x = 0;
  let y = 0;

  array.forEach((moves, index) => {
    const arr = moves.split(" ");
    const direction = arr[0];
    const num = parseInt(arr[1]);

    // let i = 0;
    // let j = 0;
    // prevMovesArr[index] = [x, y];

    for (let move = 0; move < num; move++) {
      switch (direction) {
        case "R":
          x += 1;
          break;
        case "L":
          x -= 1;
          break;
        case "U":
          y += 1;
          break;
        case "D":
          y -= 1;
          break;
      }

      let newx;
      let newy;
      //   let newi = i;
      //   let newj = j;

      let tail;
      for (let z = 0; z < 9; z++) {
        const prevTail = prevMovesArr[z];
        let [i, j] = prevTail;
        if (z === 0) {
          tail = tailmove(x, y, i, j);
        } else {
          newx = prevMovesArr[z - 1][0];
          newy = prevMovesArr[z - 1][1]; //
          tail = tailmove(newx, newy, i, j);
        }
        prevMovesArr[z] = [tail[0], tail[1]];
        // newx = tail[0];
        // newy = tail[1];

        // newx = tail[0];
        // newy = tail[1];
        // i = tail[2];
        // j = tail[3];

        // console.log("this is i, j", `i: ${i}, j: ${j}`);
      }
      result.push(`${prevMovesArr[8][0]},${prevMovesArr[8][1]}`);
      console.log("this is", `prevMovesArr: ${prevMovesArr} move: ${move}`);
    }
    // i = previ;
    // j = prevj;
  });

  console.log("this is result", result);

  const sol = new Set(result);
  return sol.size;
}

// console.log(solution(exampleArray));
// console.log(solution(array));

console.log(solution2(exampleArray));
console.log(tailmove(-1, -2, 0, 0));
console.log(solution2(array));
