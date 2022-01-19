// @ts-check

function removeDuplicates(nums) {
  let q = 0;
  let p = 1;
  for (; p <= nums.length; p++) {
    if (nums[q] !== nums[p]) nums[++q] = nums[p];
  }
  return q;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr), arr);
