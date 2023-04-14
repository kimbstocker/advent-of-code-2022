"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day4example.txt", "utf8");
var data = fs.readFileSync("day4.txt", "utf8");
var exampleArray = exampleData.split(/\n/);
var array = data.split(/\n/);
var Range = /** @class */ (function () {
    function Range(s) {
        var parts = s.split("-");
        this.from = parseInt(parts[0]);
        this.to = parseInt(parts[1]);
    }
    Range.prototype.contains = function (other) {
        return this.from <= other.from && this.to >= other.to;
    };
    Range.prototype.overlaps = function (other) {
        return !(this.from > other.to || this.to < other.from);
    };
    return Range;
}());
console.log(exampleArray);
function solution(array) {
    var result = 0;
    array.map(function (str) {
        var ranges = str.split(",");
        var firstRangeStartNum = parseInt(ranges[0].split("-")[0]);
        var firstRangeEndNum = parseInt(ranges[0].split("-")[1]);
        var secondRangeStartNum = parseInt(ranges[1].split("-")[0]);
        var secondRangeEndNum = parseInt(ranges[1].split("-")[1]);
        if ((firstRangeStartNum >= secondRangeStartNum &&
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
                secondRangeStartNum <= firstRangeEndNum)) {
            result += 1;
        }
    });
    return result;
}
console.log(solution(exampleArray));
console.log(solution(array));
//# sourceMappingURL=day4.js.map