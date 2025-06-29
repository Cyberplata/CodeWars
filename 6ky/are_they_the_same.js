function comp(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) return false;
    if (array1.some(item => typeof item !== 'number') || array2.some(item => typeof item !== 'number')) return false;

    const newArr1 = array1.map(item => item * item).sort((a, b) => a - b);
    const newArr2 = [...array2].sort((a, b) => a - b);

    for (let i = 0; i < newArr1.length; i++) {
        if (newArr1[i] !== newArr2[i]) {
            return false;
        }
    }
    return true;
}

// var 2 - every()
// function _comp(array1, array2) {
//     if (!array1 || !array2 || array1.length !== array2.length) return false;
//     if (array1.some(item => typeof item !== 'number') || array2.some(item => typeof item !== 'number')) return false;
//
//     const newArr1 = array1.map(item => item * item).sort((a, b) => a - b);
//     const newArr2 = [...array2].sort((a, b) => a - b);
//
//     return newArr1.every((value, index) => value === newArr2[index]);
// }

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2)) // true

const a1_1 = [121, 144, 19, 161, 19, 144, 19, 11]
const b2_1 = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a1_1, b2_1)) // false

const a1_2 = [null, 2, 10]
const a2_2 = [10, 10, 11, 12]
console.log(comp(a1_2, a2_2)) // false
