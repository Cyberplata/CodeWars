// Array.from + filter + reduce
function solution(number){
  if (number<0) return 0
  const newArr = Array.from({length:number-1}, (_, i)=>i+1) // создал массив от 0 до 10
  const newFilter = newArr
    .filter(n=>n%3===0 || n%5===0)
  return newFilter.reduce((acc, item) => (acc+item), 0)
}

const res = solution(10)
console.log(res) // 23

// Через цикл 1 проход вместо 3х
function solution(number) {
  if (number < 0) return 0; // Если число отрицательное, сразу возвращаем 0
  let sum = 0; // Переменная для хранения суммы
  for (let i = 1; i < number; i++) { // Проходим по числам от 1 до number - 1
    if (i % 3 === 0 || i % 5 === 0) { // Если кратно 3 или 5
      sum += i; // Добавляем к сумме
    }
  }
  return sum; // Возвращаем итоговую сумму
}

const res = solution(10);
console.log(res); // 23
