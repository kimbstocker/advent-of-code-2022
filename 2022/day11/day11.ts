import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day11example.txt", "utf8");
const data = fs.readFileSync("day11.txt", "utf8");

const exampleArray = exampleData.split(/\n/).filter((str) => str !== "");
const array = data.split(/\n/).filter((str) => str !== "");

console.log(exampleArray);

class Monkey {
  items: number[];
  operation: (number) => number;
  divisibleBy: number;
  ifTrue: number;
  ifFalse: number;
  inspectedItems: number;
}

function findNumber(s: string): number {
  return parseInt(s.match(/\d+/)[0]);
}

function solution(array: string[]) {
  let monkeys: Monkey[] = [];
  array.forEach((line) => {
    if (line.startsWith("Monkey ")) {
      const monkey = new Monkey();
      monkey.inspectedItems = 0;
      monkeys.push(monkey);
      return;
    }

    const monkey = monkeys[monkeys.length - 1];
    if (line.startsWith("  Starting items: ")) {
      const text = line.substring("  Starting items: ".length);
      const numbers = text.split(/, /).map((n) => parseInt(n));
      monkey.items = numbers;
    } else if (line.startsWith("  Operation: ")) {
      if (line.includes(" + ")) {
        const number = findNumber(line);
        monkey.operation = (n) => n + number;
      } else if (line.includes("old * old")) {
        monkey.operation = (n) => n * n;
      } else {
        const number = findNumber(line);
        monkey.operation = (n) => n * number;
      }
    } else if (line.startsWith("  Test: ")) {
      const number = findNumber(line);
      monkey.divisibleBy = number;
    } else if (line.startsWith("    If true: ")) {
      monkey.ifTrue = findNumber(line);
    } else if (line.startsWith("    If false: ")) {
      monkey.ifFalse = findNumber(line);
    }
  });

  console.log(monkeys);

  const big = monkeys
    .map((m) => m.divisibleBy)
    .reduce((total, num) => total * num, 1);
  console.log(big);

  for (let i = 0; i < 10000; i++) {
    monkeys.forEach((monkey, index) => {
      let inspectedItems = 0;

      const { items, operation, divisibleBy, ifTrue, ifFalse } = monkey;

      items.forEach((item) => {
        //let worryLevel = Math.trunc(operation(item) / 3);
        let worryLevel = operation(item);
        worryLevel = worryLevel % big;
        if (worryLevel % divisibleBy === 0) {
          monkeys[ifTrue].items.push(worryLevel);
        } else {
          monkeys[ifFalse].items.push(worryLevel);
        }
        inspectedItems += 1;
      });
      monkey.items = [];

      monkey.inspectedItems += inspectedItems;
    });
  }
  //   console.log(monkeys[0]);
  //   console.log(monkeys);
  let inspectedItems = monkeys.map((mokey) => {
    return mokey.inspectedItems;
  });

  const sorted = inspectedItems.sort((a, b) => b - a);
  console.log(sorted);
  console.log(sorted[0] * sorted[1]);

  console.log(inspectedItems);
}

function solution2(array: string[]) {}

console.log(solution(exampleArray));
//console.log(solution(array));

// console.log(solution2(exampleArray));
// console.log(solution2(array));
