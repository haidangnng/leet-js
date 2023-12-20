// @leet start
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remain = target - num;
    if (map[remain] >= 0) return [map[remain], i];
    map[num] = i;
  }

  return [0, 0];
}
// @leet end
