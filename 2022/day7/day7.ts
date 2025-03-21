import * as fs from "fs";
import nodeTest, { it } from "node:test";
import { nextTick } from "process";

const exampleData = fs.readFileSync("day7example.txt", "utf8");
const data = fs.readFileSync("day7.txt", "utf8");

const exampleArray = exampleData.split(/\n/);
const array = data.split(/\n/);

// enum Type {
//     FILE, DIR
// }

type Dir = {
  name: string;
  size: number;
  nodes: Array<Dir | File>;
};

type File = {
  name: string;
  size: number;
};

console.log(exampleArray);

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function parse(array: string[]): Dir {
  let root: Dir = { name: "/", size: 0, nodes: [] };
  let dir: Dir = root;
  let dirs = [root];

  for (let i = 1; i < array.length; i++) {
    const split = array[i].split(" ");
    if (split[1] === "ls") {
      continue;
    }

    if (split[0] + split[1] === "$cd") {
      if (split[2] === "..") {
        dirs.pop();
        dir = dirs[dirs.length - 1];
      } else {
        const childNode = dir.nodes.filter((node) => node.name === split[2]);
        dir = childNode[0] as Dir;
        dirs.push(dir);
      }
    } else {
      if (split[0] === "dir") {
        const childDir: Dir = {
          name: split[1],
          size: 0,
          nodes: [],
        };
        dir.nodes.push(childDir);
      } else {
        const childFile: File = {
          name: split[1],
          size: parseInt(split[0]),
        };
        dir.nodes.push(childFile);
      }
    }

    // console.log("this is root", root);
    // console.log("root's first node", root.nodes[0]);
    // console.log("this is dir", dir);
  }

  return root;
}

function calculateSizes(dir: Dir, sizes: number[]) {
  let size = 0;
  for (let node of dir.nodes) {
    if ("nodes" in node) {
      size += calculateSizes(node, sizes);
    } else {
      size += node.size;
    }
  }
  sizes.push(size);
  return size;
}

function solution(array: string[]) {
  const root = parse(array);

  const sizes = [];
  calculateSizes(root, sizes);

  return sizes
    .filter((s) => s < 100_000)
    .reduce((total, num) => {
      return total + num;
    }, 0);
}

function solution2(array: string[]) {
  const root = parse(array);

  const sizes = [];
  const current = calculateSizes(root, sizes);

  const total = 70000000;
  const max = total - 30000000;

  const toDelete = current - max;
  return Math.min(...sizes.filter((s) => s >= toDelete));
}

console.log(solution(exampleArray));
console.log(solution(array));

console.log(solution2(exampleArray));
console.log(solution2(array));
