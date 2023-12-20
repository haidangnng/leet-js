// @leet start
function isPalindrome(s: string): boolean {
  if (!s.length) return true;
  const str = s.match(/[a-zA-Z0-9]/g) || [];

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
  }
  return true;
}
// @leet end
