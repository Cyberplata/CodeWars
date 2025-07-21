function persistence(num) {
    let count = 0;
​
    for (let i = 0; num >= 10; i++) {
        count++;
        num = num.toString().split('').reduce((a, b) => a * b, 1);
    }
​
    return count;
}