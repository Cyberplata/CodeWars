// var1
function rowWeights(array){
  const first = array
     .filter((_,index)=>index%2 === 0)
     .reduce((acc,item)=>acc+item,0);
  const second = array
      .filter((_,index)=>index%2 !== 0)
      .reduce((acc,item)=>acc+item,0);

  return [first, second]
}

const res1 = rowWeights([13, 27, 49]) //[62, 27]
const res2 = rowWeights([80]) // [80,0]
const res3 = rowWeights([100,50])// [100,50]
const res4 = rowWeights([50,60,70,80])// [120,140]
const res5 = rowWeights([0])// [0,0])

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)

// var2
function rowWeights(array) {
  return array.reduce(
    (acc, item, index) => {
      acc[index % 2] += item;
      return acc;
    },
    [0, 0]
  );
}

// var3
function rowWeights(array) {
  let first = 0;
  let second = 0;

  array.forEach((item, index) => {
    if (index % 2 === 0) {
      first += item; // Четные индексы идут в first
    } else {
      second += item; // Нечетные индексы идут в second
    }
  });

  return [first, second];
}
