//Are the numbers in order
function inAscOrder(arr) {
  const copyArr = [...arr];

  for (let i = 0; i < copyArr.length - 1; i++) {
    if (copyArr[i] >= copyArr[i + 1]) {
      return false;
    }
  }
  return true;
}


const res1 = inAscOrder([1,2,4,7,19]);
const res2 = inAscOrder([1,6,10,18,2,4,20]);

console.log(res1); // true
console.log(res2); // false

/*
// var2
function inAscOrder(arr) {
  return arr.every((val, i) => i === 0 || arr[i - 1] < val);
}*/
