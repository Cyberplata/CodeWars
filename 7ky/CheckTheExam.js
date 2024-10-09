// Первый входной массив — это ключ к правильным ответам на экзамен, например ["a", "a", "b", "d"]. Второй содержит отправленные ответы студента.
//
// Два массива не пустые и имеют одинаковую длину. Верните оценку для этого массива ответов, указав +4 для каждого правильного ответа, -1 для каждого неправильного ответа и +0 для каждого пустого ответа, представленного в виде пустой строки (в C используется символ пробела).
//
// Если оценка < 0, вернуть 0.

// Например:
// Correct answer    |    Student's answer   |   Result
// ---------------------|-----------------------|-----------
//     ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//     ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//     ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//     ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

// // Мой неправильный вариант
// function checkExam(array1, array2) {
//     let result = 0;
//
//     for (let i = 0; i < array1.length; i++) {
//         if (!array2[i]) {
//             continue;
//         }
//         if (array2[i] && array1[i] !== array2[i]) {
//             result += -1;
//         }
//         if (array1[i] === array2[i]) {
//             result += 4;
//         }
//     }
//     if (result < 0) {
//         return 0;
//     } else {
//         return result;
//     }
// }

// // I.Исправленный вариант через for
// function checkExam(array1, array2) {
//     let result = 0;
//
//     for (let i = 0; i < array1.length; i++) {
//         if (!array2[i]) {
//             // Если элемент пустой, пропускаем этот шаг
//             continue;
//         }
//         if (array1[i] === array2[i]) {
//             result += 4;
//         } else {
//             result += -1;
//         }
//     }
//
//     // Проверка на отрицательный результат после всех итераций
//     if (result < 0) {
//         return 0;
//     } else {
//         return result;
//     }
// }

// // II.Через метод reduce()
function checkExam(array1, array2) {
    const result = array1.reduce((acc, curr, index) => {
        if (array2[index] === "") {
            return acc;
        } else if (curr === array2[index]) {
            return acc + 4;
        } else {
            return acc - 1;
        }
    }, 0);

    return result < 0 ? 0 : result;
}


const res1 = checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) // 6
const res2 = checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) // 7
const res3 = checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) // 16
const res4 = checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) // 0
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)