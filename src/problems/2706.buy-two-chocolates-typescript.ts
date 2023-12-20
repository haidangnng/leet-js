// @leet start
function buyChoco(prices: number[], money: number): number {
  const min: [number, number] = [Infinity, Infinity];

  for (const i of prices) {
    const maxIndex = min[0] > min[1] ? 0 : 1;

    if (min[maxIndex] > i) {
      min[maxIndex] = i;
      continue;
    }
  }
  const minTtl = min[0] + min[1];

  return minTtl <= money ? money - minTtl : money;
}
// @leet end
