// @leet start
function productExceptSelf(nums: number[]): number[] {
  return nums.reduce((acc, cur, i) => {
    acc[i] = acc[i + 1] * cur;
    acc[nums.length - i - 1] *= acc[nums.length - i] * cur;
    return acc;
  }, Array(nums.length).fill(1));
}
// @leet end
