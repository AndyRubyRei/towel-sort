
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  const result = []
  for(let i = 0; i < matrix.length; i+= 1){
    if(i % 2 === 0){
      // add sorted elements to result
      result.push(...matrix[i].sort((a, b) => a - b));
    } else {
      result.push(...matrix[i].sort((a, b) =>  b - a));
    }
  }
  return result;
}
