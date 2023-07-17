//Найти сумму чисел
// function findSum(numbers) {
//   let sum = 0;
  
//   if (numbers.length === 0) return 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// const numbers = [1, 2, 3, 4]

// const findSum = numbers.reduce((acc, item) => acc + item, 0)
// console.log(findSum)




//Поменять числа меньше 5 на '0' , а больше на '1' 
// 1ый способ через цикл
// function fakeBin(x){
//   let newString = [];

//   for (let i = 0; i < x.length; i++) {
//    if(x.split('')[i] < 5) {
//       newString.push('0');
//    } else {
//       newString.push('1');
//    }
//   }
//   return newString.join('');
// }

// 2ой способ через map
function fakeBin(x) {
   return x.split('').map(n => n > 5 ? 1 : 0).join('')
}
// console.log('45385593107843568'.split('')[0]);
// console.log(''.concat('0'));
// console.log(fakeBin('45385593107843568')); // '01011110001100111'

/* Без .join('') выводил newString
[
  '0', '1', '0', '1', '1',
  '1', '1', '0', '0', '0',
  '1', '1', '0', '0', '1',
  '1', '1'
]
*/

function century(year) {
  
  return Math.ceil(year / 100);
}
// console.log(century(1601)); // 17


function disemvowel(str) {
  return str.split('').filter(el => !('aeiou').includes(el)).join('');
}

// console.log(disemvowel("This website is for losers LOL!"));


// return -1 * (sumFinal - array.reduce((acc, item) => {
//   const sum = acc + item;
//   return sum;
// }, 0))



function sumArray(array) {
  if (!array || array.length <= 2) return 0;

  const maxVal = Math.max(...array);
  const minVal = Math.min(...array);
  const sumFinal = maxVal + minVal
  console.log('maxVal ', maxVal);
  console.log('minVal ', minVal);
  console.log('sumFinal ', sumFinal);
  return array.reduce((acc, item) => {
    return acc + item;
  }, 0) - sumFinal;
}


  // function sumArray(array) {
    
  //   if (!array || array.length <= 2) return 0
  //   //[...array - Math.max(...array) - Math.min(...array)]
  //   // array.reduce((acc, item) => acc + item, 0)
  //   const sumVal = array.reduce((acc, item) => {
  //     return acc + item;
  //   }, 0)  
  //   console.log(sumVal)

  // }


  console.log(sumArray(null)); // 0
  console.log(sumArray([])); // 0
  console.log(sumArray([ 3 ])); // 0
  console.log(sumArray([ 3, 5 ])); // 0
  console.log(sumArray([ 6, 2, 1, 8, 10 ])); // 16
  console.log(sumArray([ 0, 1, 6, 10, 10 ])); // 17

