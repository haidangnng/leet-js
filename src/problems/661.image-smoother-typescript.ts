// @leet start

function imageSmoother(img: number[][]): number[][] {
  const adjacent = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const result: number[][] = [...Array(img.length)].map(() =>
    Array(img[0].length),
  );

  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[i].length; j++) {
      let sum = img[i][j];
      let count = 1;
      for (const [x, y] of adjacent) {
        if (img[i + x] !== undefined && img[i + x][j + y] !== undefined) {
          sum += img[i + x][j + y];
          count++;
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }
  return result;
}
// @leet end
