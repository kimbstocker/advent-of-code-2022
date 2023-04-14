"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day2example.txt", "utf8");
var data = fs.readFileSync("day2.txt", "utf8");
console.log(exampleData);
var exampleArray = exampleData.split(/\n/);
var array = data.split(/\n/);
function findWinner(a, b) {
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
function findResult(array) {
    var scorecard = [
        { shape: "X", score: 0 },
        { shape: "Y", score: 3 },
        { shape: "Z", score: 6 },
    ];
    var score = 0;
    array.map(function (play) {
        var plays = play.split(" ");
        console.log(plays);
        var shapeScore = scorecard.filter(function (miniscore) { return miniscore.shape === plays[1]; });
        score += shapeScore[0].score;
        var winnNumber = findWinner(plays[0], plays[1]) || 0;
        score += winnNumber;
        console.log(score);
    });
    return score;
}
console.log(findResult(exampleArray));
console.log(findResult(array));
//# sourceMappingURL=day2.js.map