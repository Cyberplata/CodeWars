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
console.log(fakeBin('45385593107843568')); // '01011110001100111'

/* Без .join('') выводил newString
[
  '0', '1', '0', '1', '1',
  '1', '1', '0', '0', '0',
  '1', '1', '0', '0', '1',
  '1', '1'
]
*/