// @leet start
function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const count = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      count[strs[i].charCodeAt(j) - 97] += 1;
    }
    result.set(
      count.toString(),
      result.get(count.toString())
        ? [...result.get(count.toString())!, strs[i]]
        : [strs[i]],
    );
  }

  return Array.from(result.values());
}
// @leet end
