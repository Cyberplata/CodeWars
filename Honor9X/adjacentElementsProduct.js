//var1 - for
function adjacentElementsProduct(array) {
  let maxCount = array[0]*array[1];
  
  for (let i=0; i < array.length-1; i++) {
    let currentValue = array[i]*array[i+1];
    
    if (currentValue > maxCount) {
      maxCount = currentValue
    }
  }
  return maxCount;
}

//var2 - reduce
function adjacentElementsProduct(array) {
  return array.slice(0, -1).reduce((max, _, i) => {
    const product = array[i] * array[i + 1];
    return Math.max(max, product);
  }, array[0] * array[1]);
}

//var3 - Однопроходный метод через деструктуризацию
function adjacentElementsProduct(array) {
  return Math.max(...array.map((_, i) => array[i] * array[i + 1]).slice(0, -1));
}


const res1 = adjacentElementsProduct([5, 8]) // 40
const res2 = adjacentElementsProduct([1, 2, 3]) // 6;
const res3 = adjacentElementsProduct([1, 5, 10, 9]) // 90
const res4 = adjacentElementsProduct([4, 12, 3, 1, 5]) // 48
const res5 = adjacentElementsProduct([5, 1, 2, 3, 1, 4]) // 6

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)