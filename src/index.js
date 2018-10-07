module.exports = function solveSudoku(matrix) {

  function solve(matrix){
    let Solution;
    for (let i = 0; i < 9; i++){
      for (let k = 0; k < 9; k++){
        if (matrix[i][k] == 0) {
          /* correct   number 1 to 9 */
          for (let p = 1; p < 10; p++){
            if (check(matrix, i, k, p)){
              matrix[i][k] = p;
              /*make recursion if m[i][k] == number;*/
              Solution = solve(matrix);
              if (Solution) {
                return true;
              }
              /* p not found next n in m[i][k]*/
              matrix[i][k] = 0;
            }
          }
          /*not correct  solution*/
          return false;
        }
      }
    }
    /* correct  solution*/
    return true;
  }



  function check(matrix1, i, k, numb) {
    let xBlock = Math.floor(i / 3) * 3;
    let yBlock = Math.floor(k / 3) * 3;
    for (let z = 0; z < 9; z++) {
      if (matrix1[i][z] == numb || matrix1[z][k] == numb || matrix1[xBlock + Math.floor(z / 3)][yBlock + z % 3] == numb) {
        return false;
      }
    }
    /*(row col block) */
    return true;
  }
  solve(matrix);
  return matrix;
}