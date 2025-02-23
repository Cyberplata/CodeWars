/*function largestPairSum (numbers) {
  const ind1 = numbers.indexOf(Math.max(...numbers))
  const newArr = numbers.slice(ind1+1)
  const ind2 = newArr.indexOf(Math.max(...newArr))
  
  const sumMaxElem = Math.abs(numbers[ind1]) + Math.abs(newArr[ind2])
  
  return sumMaxElem
}*/

const res1 = largestPairSum([10,14,2,23,19]) // 42
const res2 = largestPairSum([-100,-29,-24,-19,19]) //0
console.log(res1)
console.log(res2)


// var2
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a); // Сортировка по убыванию
  return numbers[0] + numbers[1]; // Сумма двух первых элементов (наибольших)
}

const res1 = largestPairSum([10, 14, 2, 23, 19]); // 42
const res2 = largestPairSum([-100, -29, -24, -19, 19]); // 0
console.log(res1);
console.log(res2);

