function persistence(num) {
    let count = 0;

    for (let i = 0; num >= 10; i++) {
        count++;
        num = num.toString().split('').reduce((a, b) => a * b, 1); // 27
        // console.log("count", count);
        // console.log("num", num);
    }

    return count;
}

const res1 = persistence(39) // 3
const res2 = persistence(4) // 0
const res3 = persistence(25) // 2
const res4 = persistence(999) // 4

console.log("res1", res1)
console.log("res2", res2)
console.log("res3", res3)
console.log("res4", res4)