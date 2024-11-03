// Вариант через два цикла
// function capitalize(s) {
//     const newArr = s.split("");
//     const result1 = []
//     const result2 = []
//
//     for (let i = 0; i < newArr.length; i++) {
//         if (i % 2 === 0) {
//             result1.push(newArr[i].toUpperCase())
//         } else {
//             result1.push(newArr[i].toLowerCase())
//         }
//     }
//
//     for (let j = 0; j < newArr.length; j++) {
//         if (j % 2 !== 0) {
//             result2.push(newArr[j].toUpperCase())
//         } else {
//             result2.push(newArr[j].toLowerCase())
//         }
//     }
//
//
//     return [result1.join(""), result2.join("")]
// };

    // const array1 = '';
    // const array2 = '';
    //
    // const res = newArr.reduce((acc, item, index) => {
    //     if (index % 2 === 0) {
    //         s.toUpperCase()
    //     } else {
    //         s.toUpperCase()
    //     }
    //     return acc
    // }, [array1, array2])
    // return res

    // const res = newArr.map((el, index) => {
    //     if (index % 2 === 0) {
    //         s.toUpperCase()
    //     } else {
    //         s.toLowerCase()
    //     }
    // })

    // return newArr;

// Вариант через два map()
function capitalize(s) {
    const newArr = s.split("");

    const result1 = newArr.map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("");
    const result2 = newArr.map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase()).join("");

    return [result1, result2];
}



const res1 = (capitalize("abcdef")) // ['AbCdEf', 'aBcDeF']);
const res2 = (capitalize("codewars")) // ['CoDeWaRs', 'cOdEwArS']);
const res3 = (capitalize("abracadabra")) // ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
const res4 = (capitalize("codewarriors")) // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)