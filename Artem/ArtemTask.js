function exactSquares(num) {
    let result;

    for (let index = 1; index ** 2 <= num; index++) {
        alert(result = index ** 2);
    }
    return result;
}

console.log(exactSquares(50));
console.log(exactSquares(1));