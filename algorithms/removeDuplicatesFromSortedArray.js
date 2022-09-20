// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let repeatMap = new Map();
  const temp = [];

  for (let i = 0; i < nums.length; i++) {
    if (repeatMap.has(nums[i])) {
      delete nums[i];
    } else {
      repeatMap.set(nums[i], i);
    }
  }

  nums
    .sort((a, b) => a - b)
    .forEach((num) => {
      if (typeof num !== "undefined") {
        temp.push(num);
      }
    });

  nums = temp;

  return nums.length;
}

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
