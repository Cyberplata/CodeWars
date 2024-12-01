// Description:
// Well met with Fibonacci bigger brother, AKA Tribonacci.
//
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
//
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
//
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
//
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
//
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
//
// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
//
// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

// Пример:
// Если входные данные:
//
// signature = [1, 1, 1]
// n = 10
// Результат:
//
// Начинаем с [1, 1, 1] (это сигнатура).
// Вычисляем следующее число: 1 + 1 + 1 = 3.
// Далее: 1 + 1 + 3 = 5.
// Потом: 1 + 3 + 5 = 9.
// И так до 10 чисел. В итоге:
// [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]

// С чего начать:
// Понять, как работать с сигнатурой и строить последовательность.
// Учесть случай, если n = 0 (возвращаем пустой массив).
// Если n меньше 3 (длины сигнатуры), нужно вернуть только первые n элементов из сигнатуры.
// Если n больше 3, добавлять числа, пока результат не достигнет нужной длины.


// function tribonacci(signature,n){
//     let nextNumberSum = 0;
//     const result = [...signature];
//     const edgedArr = signature.toSpliced(n);
//
//     if (n === 0) return [];
//     if (n <= signature.length) return edgedArr;
//
//     for (let i = 0; result.length < n; i++) {
//         nextNumberSum = signature.reduce((acc, item) => acc + item, 0); // 3
//         result.push(nextNumberSum)
//         result.slice(i)
//         console.log(nextNumberSum)
//         console.log(result.push(nextNumberSum))
//         console.log(result.slice(i))
//     }
//     return result;
// }

//var 2
function tribonacci(signature, n) {
    // Если n = 0, возвращаем пустой массив
    if (n === 0) return [];
    // Если n меньше или равно длине сигнатуры, обрезаем её и возвращаем
    if (n <= signature.length) return signature.slice(0, n);

    // Начальный массив результата, копируем сигнатуру
    const result = [...signature];

    // Пока длина массива результата меньше n, добавляем новые элементы
    while (result.length < n) {
        // Суммируем последние три числа массива
        const nextNumberSum = result.slice(-3).reduce((acc, item) => acc + item, 0);
        // Добавляем эту сумму в конец массива
        result.push(nextNumberSum);
    }

    // Возвращаем получившуюся последовательность
    return result;
}

//var 3
function tribonacci(signature, n) {
    for (var i = 0; i < n - 3; i++) {
        // 1. Итерация начинается с i = 0 и идет до (n - 3)
        // 2. Это количество итераций необходимо для того, чтобы довести массив до длины n (если n > 3).
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
        // 3. На каждой итерации берутся три элемента массива signature с индексами i, i+1 и i+2.
        // 4. Их сумма вычисляется, и результат добавляется в конец массива signature.
    }
    return signature.slice(0, n);
    // 5. В конце возвращается массив из первых n элементов.
    // Если n <= 3, то результатом будет обрезанная сигнатура.
}


const res1 = tribonacci([1,1,1], 10 ) // [1,1,1,3,5,9,17,31,57,105]
const res2 = tribonacci([0,0,1], 10 ) // [0,0,1,1,2,4,7,13,24,44]
const res3 = tribonacci([0,1,1], 10 ) // [0,1,1,2,4,7,13,24,44,81]
const res4 = tribonacci([1,0,0], 10 ) // [1,0,0,1,1,2,4,7,13,24]
const res5 = tribonacci([0,0,0], 10 ) // [0,0,0,0,0,0,0,0,0,0]
const res6 = tribonacci([1,2,3], 10 ) // [1,2,3,6,11,20,37,68,125,230]
const res7 = tribonacci([3,2,1], 10 ) // [3,2,1,6,9,16,31,56,103,190]
const res8 = tribonacci([1,1,1],  1 ) // [1])

const res9 = tribonacci([300,200,100], 0 ) // [])

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)
console.log(res9)
