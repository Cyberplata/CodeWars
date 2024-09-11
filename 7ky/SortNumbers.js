// Завершите решение так, чтобы оно сортировало переданный массив чисел. Если функция передает пустой массив или значение null/nil, то она должна вернуть пустой массив.
//
//     Например:
//
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


function solution(nums) {

    // if (!nums) {
    //     return []
    // }

    return !nums ? [] : nums.sort((a, b) => a - b)
}

const res1 = solution([1, 2, 3, 10, 5])
console.log(res1) // [1,2,3,5,10]

const res2 = solution(null)
console.log(res2) // []

const res3 = solution([])
console.log(res3) // []

const res4 = solution([20, 2, 10])
console.log(res4) // [2,10,20]

const res5 = solution([2, 20, 10])
console.log(res5) // [2,10,20]

