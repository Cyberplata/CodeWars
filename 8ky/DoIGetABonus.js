function bonusTime(salary, bonus) {
    return bonus
        ? "\u00A3" + (salary * 10)
        : "\u00A3" + salary
}


const res1 = bonusTime(10000, true) // '£100000'
const res2 = bonusTime(25000, true) // '£250000'
const res3 = bonusTime(10000, false) // '£10000'
const res4 = bonusTime(60000, false) // '£60000'
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)