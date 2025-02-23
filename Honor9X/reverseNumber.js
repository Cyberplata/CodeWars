// my
function reverseNumber(n) {
  if (n === 0) return 0;

  const reversed = parseInt(Math.abs(n).toString().split('').reverse().join(''));
  return reversed * Math.sign(n);
}

// 1ое место
function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  
  return isNegative ? -result : result;
}


const res1 = reverseNumber(123) // 321
const res2 = reverseNumber(-123) // -321, 'Negative Numbers should be preserved'
const res3 = reverseNumber(1000) // 1, 'Should handle numbers ending with "0"'
const res4 = reverseNumber(4321234) // 4321234)
const res5 = reverseNumber(5) // 5
const res6 = reverseNumber(0) // 0
const res7 = reverseNumber(98989898) // 89898989

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)