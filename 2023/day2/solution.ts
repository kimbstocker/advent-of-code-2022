import * as fs from "fs";

const exampleData = fs.readFileSync("example.txt", "utf8");
const data = fs.readFileSync("data.txt", "utf8");

const solve1 = (input: string): number => {
  const array = input.split(/\n/);

  let result = 0;

  array.forEach((game) => {
    const gameArray = game.split(": ");
    const gameNum = gameArray[0].split(" ");

    const gameIndex = Number(gameNum[1]);
    // console.log("gameNum",  Number(gameNum[1]));
    const colourArr = gameArray[1].split("; ");
    const bag = {
      red: 1,
      green: 1,
      blue: 1,
    };
    colourArr.forEach((colors) => {
      const seperatedColor = colors.split(", ");

      //   let possible = true;
      seperatedColor.forEach((numCol) => {
        const colNum = numCol.split(" ");

        // console.log(colNum);

        if (colNum[0] > bag[colNum[1]]) {
          bag[colNum[1]] = Number(colNum[0]);
        }
      });

      //   console.log(seperatedColor);
    });

    console.log(bag);
    result += bag.red * bag.green * bag.blue;
  });

  return result;
};

console.log(solve1(exampleData));
// console.log(solve1(data));
