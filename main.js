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
  return str.split('').filter(el => !('aeiouAEIOU').includes(el)).join('');
}

// console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!


// Digit*Digit
function squareDigits(num) {
  return +Array.from(String(num)).map(num => num ** 2).join('');
}

// console.log(squareDigits(765)); // 49-36-25 (493625)


//Counting sheep...
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.join('').replace(/false/gi, '').length/4;
  // return arrayOfSheep.filter(el => el).length; // 17
  // return arrayOfSheep.filter(Boolean).length; // 17
};

const arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

console.log(countSheeps(arrayOfSheep)); // количечество true - 17 