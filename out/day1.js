"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day1example.txt", "utf8");
var data = fs.readFileSync("day1.txt", "utf8");
var solve1 = function (input) {
    var array = input.split(/\n\n/);
    var result = 0;
    array.map(function (str) {
        var smallArray = str.split("\n");
        var tempResult = smallArray.reduce(function (total, num) {
            return total + parseInt(num);
        }, 0);
        if (tempResult > result) {
            result = tempResult;
        }
    });
    return result;
};
var solve2 = function (input) {
    var array = input.split(/\n\n/);
    var results = [];
    array.map(function (str) {
        var smallArray = str.split("\n");
        var tempResult = smallArray.reduce(function (total, num) {
            return total + parseInt(num);
        }, 0);
        if (results.length < 1) {
            results.push(tempResult);
        }
        else {
            for (var i = 0; i < results.length; i++) {
                if (tempResult > results[i]) {
                    results.splice(i, 0, tempResult);
                    break;
                }
            }
            if (results.length > 3) {
                results.pop();
            }
        }
    });
    var result = results.reduce(function (total, num) {
        return total + num;
    }, 0);
    return result;
};
// console.log(solve1(exampleData));
// console.log(solve1(data));
console.log(solve2(exampleData));
console.log(solve2(data));
//# sourceMappingURL=day1.js.map