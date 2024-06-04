// На этот раз ни истории, ни теории. В примерах ниже показано, как написать функцию accum:
//
//     Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum представляет собой строку, включающую только буквы от a..zи A..Z.

function accum(s) {
    return s.split("").map((el, index) => {
        return el.toUpperCase() + el.toLowerCase().repeat(index)
    }).join("-")
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))