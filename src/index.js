
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortArr = [];
  if (!matrix) {
  return [];
  }
  for (let i = 0; i< matrix.length; i++){
    if (i % 2 != 0) {
      matrix[i].reverse();
    } 
  }
  return sortArr.concat(...matrix);
}
