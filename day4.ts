import * as fs from "fs";

const exampleData = fs.readFileSync("day4example.txt", "utf8");
const data = fs.readFileSync("day4.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

class Range {
  from: number;
  to: number;

  constructor(s: string) {
    let parts = s.split("-");
    this.from = parseInt(parts[0]);
    this.to = parseInt(parts[1]);
  }

  contains(other: Range): boolean {
    return this.from <= other.from && this.to >= other.to;
  }

  overlaps(other: Range): boolean {
    return !(this.from > other.to || this.to < other.from);
  }
}

console.log(exampleArray);

function solution(array: string[]) {
  let result = 0;

  array.map((str) => {
    const ranges = str.split(",");

    const firstRangeStartNum = parseInt(ranges[0].split("-")[0]);
    const firstRangeEndNum = parseInt(ranges[0].split("-")[1]);

    const secondRangeStartNum = parseInt(ranges[1].split("-")[0]);
    const secondRangeEndNum = parseInt(ranges[1].split("-")[1]);

    if (
      (firstRangeStartNum >= secondRangeStartNum &&
        firstRangeEndNum <= secondRangeEndNum) ||
      (secondRangeStartNum >= firstRangeStartNum &&
        secondRangeEndNum <= firstRangeEndNum) ||
      (firstRangeEndNum >= secondRangeStartNum &&
        firstRangeEndNum <= secondRangeEndNum) ||
      (secondRangeEndNum >= firstRangeStartNum &&
        secondRangeEndNum <= firstRangeEndNum) ||
      (firstRangeStartNum >= secondRangeStartNum &&
        firstRangeStartNum <= secondRangeEndNum) ||
      (secondRangeStartNum >= firstRangeStartNum &&
        secondRangeStartNum <= firstRangeEndNum)
    ) {
      result += 1;
    }
  });

  return result;
}

console.log(solution(exampleArray));
console.log(solution(array));
