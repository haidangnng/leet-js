// @leet start
function mergeAlternately(word1: string, word2: string): string {
  let res: string = "";
  const max: number = Math.max(word1.length, word2.length);

  for (let i = 0; i < max; i++) {
    res += word1[i] || "";
    res += word2[i] || "";
  }
  return res;
}
// @leet end
