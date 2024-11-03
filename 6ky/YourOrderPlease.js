/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// var1
function order(words) {
    if (!words) return "";

    const wordsArray = [];
    const individualWords = words.split(" ")

    for (let word of individualWords) {
        // Извлеки число из слова (здесь нужно использовать регулярное выражение)
        const position = word.match(/\d+/g).toString();

        // Создай объект с полями word и position
        const wordObject = {
            word: word,
            position: position
        };

        // Добавь объект в массив
        wordsArray.push(wordObject);
    }
    const sortedArray = wordsArray.sort((a, b) => a.position - b.position)

    // Собери отсортированные слова в строку
    const convertObjectToString = sortedArray.map(obj => obj.word).join(' ');
    return convertObjectToString;
}

const res1 = order("is2 Thi1s T4est 3a") // "Thi1s is2 3a T4est"
const res2 = order("4of Fo1r pe6ople g3ood th5e the2") // "Fo1r the2 g3ood 4of th5e pe6ople"
const res3 = order("") // ""

console.log(res1)
console.log(res2)
console.log(res3)


// var2
//function order(words){
//
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }

// var3
// function order(words){
//     var array = words.split(' ');
//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//         for(j = 0; j < array.length; j++) {
//             if(array[j].indexOf(i) >= 0) {
//                 sortedArray.push(array[j]);
//             }
//         }
//     }
//     return sortedArray.join(' ');
// }