// Напишите число в развернутом виде
// Вам будет дано число, и вам нужно будет вернуть его как строку в развернутой форме . Например:
//
//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// ПРИМЕЧАНИЕ: Все числа будут целыми числами больше 0.
//
// Если вам понравилось это ката, посмотрите часть 2 !!

//var1
function expandedForm(num) {
    const arrStr = Array.from(String(num)) // String(num).split('')
    const length = arrStr.length

    return arrStr
        .map((digit, i) => {
            const strToNum = Number(digit)

            if (strToNum === 0) {
                return ''
            } else {
                const degree = length - i - 1 // степень
                return strToNum * Math.pow(10, degree)
            }
        })
        .filter(Boolean)
        .join(' + ')
}

//var2
const _expandedForm = n => n
    .toString()
    .split("")           // ['7', '0', '3', '0', '4']
    .reverse()                   // ['4', '0', '3', '0', '7']
    .map((a, i) => a * 10 ** i)    // [4, 0, 300, 0, 70000]
    .filter(a => a > 0)          // [4, 300, 70000]
    .reverse()                   // [70000, 300, 4]
    .join(" + ");


const res1 = expandedForm(12) // '10 + 2'
const res2 = expandedForm(42) // '40 + 2'
const res3 = expandedForm(70304) // '70000 + 300 + 4'

console.log(res1)
console.log(res2)
console.log(res3)