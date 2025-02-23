function minSum(arr) {
  let sum = 0;
  const sorted = arr.sort((a,b)=>a-b);
  
  for (let i = 0; i < sorted.length / 2; i++) {
    sum += sorted[i] * sorted[sorted.length - 1 - i];
  } 
  return sum;
}

const res = minSum([5,4,2,3]) //22
console.log(res)