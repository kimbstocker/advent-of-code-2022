const solution = (nums: number[], target: number): number[] => {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    console.log("hashmaphas---", hashMap.has(diff));
    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i];
    }

    hashMap.set(nums[i], i);
  }
};

console.log(solution([2, 3, 4, 5, 9], 5));
