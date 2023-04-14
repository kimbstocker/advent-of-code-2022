"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day3example.txt", "utf8");
var data = fs.readFileSync("day3.txt", "utf8");
var exampleArray = exampleData.split(/\n/);
var array = data.split(/\n/);
// console.log(exampleData);
var scoreArray = Array.from({ length: 26 }, function (_, i) {
    return String.fromCharCode("a".charCodeAt(0) + i);
});
console.log(scoreArray);
function solution(array) {
    var result = 0;
    var chunkSize = 3;
    var _loop_1 = function (i) {
        var chunk = array.slice(i, i + chunkSize);
        var intersection = chunk[0].split("").filter(function (x) { return chunk[1].includes(x); });
        var oneArray = intersection.filter(function (x) { return chunk[2].includes(x); });
        var char = oneArray[0];
        if (scoreArray.includes(char)) {
            result += scoreArray.indexOf(char) + 1;
        }
        else if (scoreArray.includes(char.toLowerCase())) {
            result += scoreArray.indexOf(char.toLowerCase()) + 1 + 26;
        }
    };
    for (var i = 0; i < array.length; i += chunkSize) {
        _loop_1(i);
    }
    return result;
}
console.log(solution(exampleArray));
console.log(solution(array));
//# sourceMappingURL=day3.js.map