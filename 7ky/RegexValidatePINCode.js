// function validatePIN(pin) {
//     return pin.length === 4 || pin.length === 6 ? true : false
// }

function validatePIN(pin) {
    return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6)
        ? true
        : false
}

const res1 = validatePIN("1") // false
const res2 = validatePIN("12") // false
const res3 = validatePIN("123") // false
const res4 = validatePIN("12345") // false

const res5 = validatePIN("1234") // true
const res6 = validatePIN("1111") // true
const res7 = validatePIN("123456") // true
const res8 = validatePIN("000000") // true

const res9 = validatePIN(".234") // false
const res10 = validatePIN("-1.234") // false