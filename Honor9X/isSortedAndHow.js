function isSortedAndHow(array) {
  for(let i=0; i<array.length-1; i++) {
    if (array[i+1]<array[i] && 
        array[i+1]<array[i+2]
    ) return 'no';
    
    if (array[i]<array[i+1]) {
      return 'yes, ascending'
    } else {
        return 'yes, descending'
    }
  }
}

const res1 = isSortedAndHow([1, 2]);
const res2 = isSortedAndHow([15, 7, 3, -8]);
const res3 = isSortedAndHow([4, 2, 30]);

console.log(res1) // 'yes, ascending'
console.log(res2) // 'yes, descending'
console.log(res3) // 'no'


//var2
function isSortedAndHow(array) {
  const isAscending = array.every((val, i) => i === 0 || array[i] >= array[i - 1]);
  if (isAscending) return "yes, ascending";

  const isDescending = array.every((val, i) => i === 0 || array[i] <= array[i - 1]);
  if (isDescending) return "yes, descending";

  return "no";
}


//var 3
function isSortedAndHow(array) {
  let isAscending = true; // Флаг для проверки возрастания
  let isDescending = true; // Флаг для проверки убывания

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isAscending = false; // Нарушено возрастание
    }
    if (array[i] > array[i - 1]) {
      isDescending = false; // Нарушено убывание
    }
  }

  if (isAscending) return "yes, ascending";
  if (isDescending) return "yes, descending";
  return "no";
}
