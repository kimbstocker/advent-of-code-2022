"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day6example.txt", "utf8");
var data = fs.readFileSync("day6.txt", "utf8");
var exampleArray = exampleData.split("");
var array = data.split("");
console.log(exampleArray);
function solution(array) {
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        var arr = [];
        for (var j_1 = 0; j_1 < 14; j_1++) {
            arr.push(array[i + j_1]);
        }
        // const arr = [array[i], array[i + 1], array[i + 2], array[i + 3]];
        console.log("this is unique", arr);
        var unique = Array.from(new Set(arr));
        if (unique.length === 14) {
            j = i + 14;
            break;
        }
    }
    return j;
}
console.log(solution(exampleArray));
console.log(solution(array));
//# sourceMappingURL=day6.js.map