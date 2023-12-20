// @leet start
function reverseWords(s: string): string {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      let j = i;
      while (j < s.length && s[j] !== " ") {
        j++;
      }
      s =
        s.slice(0, i) + s.slice(i, j).split("").reverse().join("") + s.slice(j);
      i = j;
    }
  }
  return s;
}
// @leet end
