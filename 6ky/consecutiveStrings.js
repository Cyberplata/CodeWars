// function longestConsec(strarr, k) {
//     if (k <= 0 || k > strarr.length || strarr.length === 0) return "";
//
//     let maxLength = 0;
//     let resultStr = "";
//
//     for (let i = 0; i <= strarr.length - k; i++) {
//         const elementsBreakdownStr = strarr.slice(i, i + k).join('')
//         const elemLength = elementsBreakdownStr.length;
//
//         // console.log(strarr.length - k) // 4
//         // console.log(elemLength, elementsBreakdownStr); // 11 "zoneabigail"
//
//         if (elemLength > maxLength) {
//             maxLength = elemLength;
//             resultStr = elementsBreakdownStr;
//         }
//     }
//     return resultStr
// }

//  Вариант через map() + Math.max():
function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) return "";

    const joinedArr = strarr.map((_, i) =>
        strarr.slice(i, i + k).join('')
    ).filter(s => s.length > 0);
    console.log(joinedArr) // ['zoneabigail', 'abigailtheta', 'thetaform', 'formlibe', 'libezas', 'zas']

    const longest = joinedArr.reduce((a, b) =>
        b.length > a.length ? b : a, ""
    );

    return longest;
}

const res1 = longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
const res2 = longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
const res3 = longestConsec([], 3)
const res4 = longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
const res5 = longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
const res6 = longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
const res7 = longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
const res8 = longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
const res9 = longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)

console.log(res1) // "abigailtheta"
console.log(res2) // "oocccffuucccjjjkkkjyyyeehh"
console.log(res3) // ""
console.log(res4) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(res5) // "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(res6) // ""
console.log(res7) // "ixoyx3452zzzzzzzzzzzz"
console.log(res8) // ""
console.log(res9) // ""