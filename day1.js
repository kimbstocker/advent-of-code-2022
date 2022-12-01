const fs = require("fs");
const data = fs.readFileSync("day1.txt", "utf8");

const array = data.split(/\n\n/);

const fun = (array) => {
  let result = 0;

  array.map((str) => {
    smallArray = str.split("\n");
    let tempResult = smallArray.reduce((total, num) => {
      return total + parseInt(num);
    }, 0);

    if (tempResult > result) {
      result = tempResult;
    }
  });
  return result;
};

console.log(fun(array));

// console.log(linesShort.split(""));
