// 1. Циклическая проверка
function isPowerOfTwo(n) {
  if (n < 1) return false; // Числа меньше 1 не могут быть степенью двойки
  
  while (n > 1) {
    if (n % 2 !== 0) return false; // Если число не делится нацело на 2, это не степень двойки
    n = n / 2; // Делим число на 2
  }
  
  return true; // Если цикл завершился и n стало 1, это степень двойки
}

// 2. Побитовая пррверка
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// 3. Рекурсия
function isPowerOfTwo(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  return n % 2 === 0 && isPowerOfTwo(n / 2);
}

// 4. Логарифмический способ
function isPowerOfTwo(n) {
  if (n < 1) return false;
  return Math.log2(n) % 1 === 0;
}

const res1 = isPowerOfTwo(2);     // true
const res2 = isPowerOfTwo(4096);  // true
const res3 = isPowerOfTwo(5);     // false

console.log(res1); // true
console.log(res2); // true
console.log(res3); // false