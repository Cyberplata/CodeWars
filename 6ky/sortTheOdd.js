// var1
// function sortArray(array) {
//     const ascendingOddNums = array.filter(n => n % 2 !== 0).sort((a, b) => a - b); // [1,3,5]
//
//     if (array.length === 0) {
//         return [];
//     } else {
//         return array.map(el => {
//             if (el % 2 !== 0) {
//                 // Если нечётное, заменяй его первым элементом из уже отсортированного массива нечётных чисел (и не забывай его удалять из этого массива). Что здесь нужно написать такое?
//                 return ascendingOddNums.shift()
//             } else {
//                 return el
//             }
//         })
//     }
// }

// // var2
// function sortArray(array) {
//     const ascendingOddNums = array.filter(n => n % 2 !== 0).sort((a, b) => a - b); // [1, 3, 5]
//
//     return array.map(el => {
//         if (el % 2 !== 0) {
//             return ascendingOddNums.shift(); // Возвращаем первое отсортированное нечётное число
//         } else {
//             return el; // Оставляем чётное число без изменений
//         }
//     });
// }

// var3
function sortArray(array) {
    const ascendingOddNums = array.filter(n => n % 2 !== 0).sort((a, b) => a - b); // [1, 3, 5]

    return array.map(el => el % 2 !== 0 ? ascendingOddNums.shift() : el);
}

const res1 = sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
const res2 = sortArray([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0]
const res3 = sortArray([]) // []

console.log(res1);
console.log(res2);
console.log(res3);

// // var4 - console.log
// function sortArray(array) {
//     // Отфильтруем все нечётные числа и отсортируем их по возрастанию
//     const ascendingOddNums = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
//
//     console.log("Исходный массив:", array);
//     console.log("Отсортированные нечётные числа:", ascendingOddNums);
//
//     return array.map(el => {
//         console.log("Текущий элемент:", el);
//         if (el % 2 !== 0) {
//             const replacedValue = ascendingOddNums.shift();
//             console.log(`Заменяем ${el} на ${replacedValue}`);
//             return replacedValue;
//         } else {
//             console.log(`${el} остаётся без изменений`);
//             return el;
//         }
//     });
// }
//
// // Тесты
// const res1 = sortArray([5, 3, 2, 8, 1, 4]);
// console.log("Результат:", res1);
// // Ожидаемый результат: [1, 3, 2, 8, 5, 4]