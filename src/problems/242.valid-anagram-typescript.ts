// @leet start
function isAnagram(s: string, t: string): boolean {
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }

  for (let [key, value] of mapS) {
    if (mapT.get(key) !== value) return false;
  }
  return true;
}
// @leet end
