// @leet start
const map: Record<string, string> = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(map).includes(s[i])) {
      stack.push(s[i]);
    } else {
      const lastParentheses = stack[stack.length - 1];
      if (s[i] !== map[lastParentheses]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length <= 0;
}
// @leet end
