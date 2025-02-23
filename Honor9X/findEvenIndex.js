function findEvenIndex(arr){
  const totalSum = arr.reduce((acc,item) => acc+item)
  let leftSum = 0
  
  for(let i=0; i<arr.length; i++) {
   
   if (leftSum === totalSum-leftSum-arr[i]){
     return i
   } else {
     leftSum+=arr[i]
   }
  }
  return -1
}

const res1 = findEvenIndex([1,2,3,4,3,2,1]) //3
const res2 = findEvenIndex([1,100,50,-51,1,1]) //1
const res3 = findEvenIndex([1,2,3,4,5,6]) //-1
const res4 = findEvenIndex([20,10,30,10,10,15,35]) //3

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)