/*
Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.

Пример
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
Для выполнения этого задания необходимо вернуть правильный формат.

Не забудьте пробел после закрывающих скобок!
*/

//var1
function createPhoneNumber(numbers) {
    const firstPart = numbers.slice(0, 3).join('') // '123'
    const secondPart = numbers.slice(3, 6).join('') // '456'
    const thirdPart = numbers.slice(6).join('') // '7890'

    return `(${firstPart}) ${secondPart}-${thirdPart}`
}

//var2
function _createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

// var3
function __createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


const res1 = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"
const res2 = createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // "(111) 111-1111"
const res3 = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"

console.log(res1)
console.log(res2)
console.log(res3)