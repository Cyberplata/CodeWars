// Просто, учитывая строку слов, верните длину самого короткого слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// function findShort(s) {
//     return s.split(' ').reduce((accum, item) => {
//         return accum.length < item.length ? accum : item
//     }).length
// }

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

const res1 = findShort("bitcoin take over the world maybe who knows perhaps") // 3
const res2 = findShort("turns out random test cases are easier than writing out basic ones") // 3
// console.log(res1)
// console.log(res2)