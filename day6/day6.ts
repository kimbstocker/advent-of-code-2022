import * as fs from "fs";
import { it } from "node:test";

const exampleData = fs.readFileSync("day6example.txt", "utf8");
const data = fs.readFileSync("day6.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

console.log(exampleArray);

function solution(array: string[]) {}

console.log(solution(exampleArray));
console.log(solution(array));
