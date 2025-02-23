// var1
function sumCubes(n){
  return Array
     .from({length:n},(_,i)=>i+1)
     .map(el=>el**3)
     .reduce((acc,item)=>acc+item,0)
}

const res1 = sumCubes(2)
const res2 = sumCubes(3)
console.log(res1) // 9
console.log(res2) // 36

// var2
function sumCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}