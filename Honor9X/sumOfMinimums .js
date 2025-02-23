function sumOfMinimums(arr) {
  let sum = 0;
  
  for (const item of arr) {
    let minimum = Math.min(...item);
    sum += minimum
  }
  return sum
}

const res1 = sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])
console.log(res1) //9

//var2
/*
function sumOfMinimums(arr) {
  return arr.reduce((sum, row) => sum + Math.min(...row), 0);
}

const res1 = sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]);
console.log(res1); // 9
/*