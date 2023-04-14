"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var exampleData = fs.readFileSync("day7example.txt", "utf8");
var data = fs.readFileSync("day7.txt", "utf8");
var exampleArray = exampleData.split(/\n/);
var array = data.split(/\n/);
console.log(exampleArray);
function getKeyByValue(object, value) {
    return Object.keys(object).find(function (key) { return object[key] === value; });
}
function solution(array) {
    var root = { name: "/", nodes: [], parent: null };
    var dir = root;
    var _loop_1 = function (i) {
        var split = array[i].split(" ");
        if (split[1] === "ls") {
            return "continue";
        }
        console.log("this is split", split[0] + split[1]);
        if (split[0] + split[1] === "$cd") {
            if (split[2] === "..") {
                dir = dir.parent;
                // const parentName = dir.parent;
                // const findNode = root.nodes.filter((node) => {
                //   node.name === parentName;
                // });
                // dir = findNode[0] as Dir;
            }
            else {
                var childNode = dir.nodes.filter(function (node) { return node.name === split[2]; });
                dir = childNode[0];
            }
        }
        else {
            if (split[0] === "dir") {
                var childDir = {
                    name: split[1],
                    nodes: [],
                    parent: dir,
                };
                dir.nodes.push(childDir);
            }
            else {
                var childFile = {
                    name: split[1],
                    size: parseInt(split[0]),
                };
                dir.nodes.push(childFile);
            }
        }
        console.log("this is root", root);
        console.log("this is dir", dir);
    };
    for (var i = 1; i < array.length; i++) {
        _loop_1(i);
    }
    return root;
    //     const current = array[i].split(" ");
    //     const next = array[i + 1]?.split(" ");
    //     const text = current[current.length - 1];
    //     const cdCommand = current[0] + current[1];
    //     const lsCommand = next[0] + next[1];
    //     if (cdCommand === "$cd" && lsCommand === "$ls") {
    //       //   const arr = directChild[current[current.length - 1]];
    //       directChild[text] = i;
    //     }
    //     // else if (current[current.length - 1] === "..") {
    //     //   const arr = subFolder[directory];
    //     //   arr.push(array[i]);
    //     // }
    //   }
    //   console.log("this is direct child", directChild);
    //   const keys = Object.keys(directChild);
    //   //   const values = Object.values(directChild);
    //   keys.map((x, i) => {
    //     const slice = array.slice(directChild[x], directChild[keys[i + 1]]);
    //     const child = slice.slice(2, slice.length);
    //     subFolder[x] = [...child];
    //   });
    //   console.log("this is subFolder", subFolder);
    //   //   const children = Object.values(subFolder);
    //   //   const subFolderKeys = Object.keys(subFolder);
    //   // let num = 0;
    //   let result = {
    //     "/": [],
    //   };
    //   function findChild(arr: string[], object: object) {
    //     let tempObj = {};
    //     arr.map((val, index) => {
    //       const tempArr = [];
    //       const split = val.split(" ");
    //       if (split[0] === "dir") {
    //         findChild(object[split[1]], object);
    //       } else {
    //         tempArr.push(val);
    //       }
    //       console.log("root array iteration");
    //       //   return (result[index] = obj);
    //     });
    //     console.log("this is temp arr", tempArr);
    //     tempObj[split[1]] = tempArr;
    //     return tempObj;
    //   }
    //   //   let newObject
    //   const values = Object.values(subFolder);
    //   const tree = findChild(values[0], subFolder);
    //   //   tree.map();
    //   console.log("this is tree", tree);
    //   values.map((val, index) => {
    //     //   const so = parseInt(splitIt[0]);
    //     //   if (!Number.isNaN(so)) {
    //     //     num += so;
    //     //   }
    //     //   console.log("this is num", num);
    //   });
    // if (num > 100000) {
    //   const key = getKeyByValue(subFolder, arr);
    //   subFolder[key] = [];
    // }
    //   console.log("this is sub folder", subFolder);
}
console.log(solution(exampleArray));
// console.log(solution(array));
//# sourceMappingURL=day7.js.map