import * as fs from "fs";

const exampleData = fs.readFileSync("day2example.txt", "utf8");
const data = fs.readFileSync("day2.txt", "utf8");

console.log(exampleData);

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

function findWinner(a: string, b: string) {
  if (a === "A" && b === "Y") {
    return 1;
  }
  if (a === "A" && b === "Z") {
    return 2;
  }
  if (a === "A" && b === "X") {
    return 3;
  }
  if (a === "B" && b === "Z") {
    return 3;
  }
  if (a === "B" && b === "Y") {
    return 2;
  }
  if (a === "B" && b === "X") {
    return 1;
  }

  if (a === "C" && b === "Y") {
    return 3;
  }
  if (a === "C" && b === "Z") {
    return 1;
  }
  if (a === "C" && b === "X") {
    return 2;
  }
}

function findResult(array: string[]) {
  const scorecard = [
    { shape: "X", score: 0 },
    { shape: "Y", score: 3 },
    { shape: "Z", score: 6 },
  ];
  let score = 0;

  array.map((play: string) => {
    const plays = play.split(" ");
    console.log(plays);
    const shapeScore = scorecard.filter(
      (miniscore) => miniscore.shape === plays[1]
    );
    score += shapeScore[0].score;

    const winnNumber = findWinner(plays[0], plays[1]) || 0;

    score += winnNumber;

    console.log(score);
  });

  return score;
}

console.log(findResult(exampleArray));

console.log(findResult(array));
