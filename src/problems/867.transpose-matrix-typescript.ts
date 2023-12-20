// @leet start
function transpose(matrix: number[][]): number[][] {
  const row = matrix[0].length;
  const col = matrix.length;
  const result: number[][] = [...Array(row)].map(() => Array(col).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
// @leet end
