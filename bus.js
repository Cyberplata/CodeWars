function enough(cap, on, wait) {
    if (cap - on >= wait) {
        return 0;
    } else {
        return wait - (cap - on);
    }
}

const result1 = enough(10, 5, 5);
const result2 = enough(100, 60, 50);
const result3 = enough(20, 5, 5);
console.log(result1) // 0
console.log(result2) // 10
console.log(result3) // 0