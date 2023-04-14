"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day5example.txt", "utf8");
var data = fs.readFileSync("day5.txt", "utf8");
var exampleArray = exampleData.split(/\n/);
var array = data.split(/\n/);
console.log(exampleArray);
function solution(array) {
    var object = {};
    var numArray = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var index = array.indexOf("");
    var resultArray = [];
    for (var i = 0; i < index - 1; i++) {
        var correctArray = [];
        var arr = array[i].split(" ");
        var j = 0;
        while (j < arr.length) {
            if (arr[j] === "") {
                correctArray.push("empty");
                j += 4;
            }
            else {
                correctArray.push(arr[j]);
                j += 1;
            }
        }
        resultArray.push(correctArray);
        for (var i_1 = 0; i_1 < numArray.length; i_1++) {
            object[numArray[i_1]] = [];
        }
        for (var i_2 = 0; i_2 < resultArray.length; i_2++) {
            resultArray[i_2].map(function (value, index) {
                var string = (index + 1).toString();
                var arrayNum = object[string];
                if (value !== "empty") {
                    arrayNum.unshift(value);
                }
            });
        }
    }
    for (var i = index + 1; i < array.length; i++) {
        var arr = array[i].split(" ");
        var itemsNumber = parseInt(arr[1]);
        var fromColumn = parseInt(arr[3]);
        var toColumn = parseInt(arr[5]);
        var fromArray = object[fromColumn.toString()];
        var toArray = object[toColumn.toString()];
        var slice = fromArray.splice(fromArray.length - itemsNumber, itemsNumber);
        toArray.splice.apply(toArray, __spreadArray([toArray.length, 0], slice, false));
    }
    var result = Object.values(object)
        .filter(function (arr) { return arr.length; })
        .map(function (arr) {
        var letter = arr.pop();
        return letter.split("")[1];
    });
    return result.join("");
}
console.log(solution(exampleArray));
console.log(solution(array));
//# sourceMappingURL=day5.js.map