/*function findLongest(array){
  const newStrArr = array.map(el=>el.toString().length)
  const sorting = [...newStrArr].sort((a,b)=>b-a)[0]
  const res = array[sorting-1]
  return res
}*/

// var gpt 1.0
function findLongest(array) {
  // Преобразуем массив чисел в массив объектов с числом и его длиной
  const newStrArr = array.map(el => ({
    value: el, // само число
    length: el.toString().length // длина числа
  }));

  // Находим объект с максимальной длиной
  const maxObj = newStrArr.reduce((max, current) => {
    return current.length > max.length ? current : max;
  });

  return maxObj.value; // Возвращаем само число
}

// var gpt 3.0
function findLongest(array) {
  return array.reduce((max, current) => {
    return current.toString().length > max.toString().length ? current : max;
  });
}

// var 1ое место кодварс
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

const res1 = findLongest([1, 10, 100]);
const res2 = findLongest([9000, 8, 800]);
const res3 = findLongest([8, 900, 500]);

console.log(res1); // 100
console.log(res2); // 9000
console.log(res3); // 900