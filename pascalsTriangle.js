let generate = function(numRows) {
    if (!numRows) return [];

  const result = [[1]];
  let d = 0;
  let j = 0;

  for (let i = 1; i < numRows; i++) {
    let row = [1];
	
    while (j + 1 < result[d].length) {
      row.push(result[d][j] + result[d][j + 1]);
      j++;
    }
	
    row.push(1);
    result.push(row);
    j = 0;
    d++;
  }
  
  return result;
};

let numRows = 5;
console.log(generate(numRows));