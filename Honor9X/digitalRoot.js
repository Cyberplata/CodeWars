//my var1
/*
function digitalRoot(n) {
  const arrLen = [...n.toString()]
  const arrNums = arrLen.map(el=>Number(el))
  const sum = arrNums.reduce((acc,item)=>acc+item)
  const len = [...sum.toString()].length
  
  for (let i=0; i<len; i++) {
    if (len < 2) {
      return sum
    } else {
      
    }  
  }
}

const res1 = digitalRoot(16)
console.log(res1) // 7

const res2 = digitalRoot(456)
console.log(res2) // 6
*/


// var2 recursion
function digitalRoot(n) {
  const sum = [...n.toString()].reduce((acc, digit) => acc + Number(digit), 0);
  return sum < 10 ? sum : digitalRoot(sum);
}


// 1. Решение через цикл (while) 
function digitalRoot(n) {
  while (n >= 10) {
    n = [...n.toString()].reduce((acc, digit) => acc + Number(digit), 0);
  }
  return n;
}


// 2. Чисто математический способ (деление по модулю 9)
function digitalRoot(n) {
  return n === 0 ? 0 : 1 + (n - 1) % 9;
}


// 3. Решение без массивов (арифметика, деление на 10)
function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10; // Берём последнюю цифру
      n = Math.floor(n / 10); // Убираем последнюю цифру
    }
    n = sum; // Обновляем n на сумму цифр
  }
  return n;
}

console.log(digitalRoot(16));      // 7
console.log(digitalRoot(942));     // 6
console.log(digitalRoot(132189));  // 6
console.log(digitalRoot(493193));  // 2