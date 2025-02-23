function vowelIndices(word){
  return word.split('')
             .map((el, index) =>"aeiouAEIOU".includes(el) 
             ? index+1 : null)
             .filter(Boolean)
             
}

//flatMap способ
return word.split('').flatMap((el, index) => 
  "aeiouAEIOU".includes(el) ? [index + 1] : []
);

//reduce
return word.split('').reduce((acc, el, index) => {
  if ("aeiouAEIOU".includes(el)) acc.push(index + 1);
  return acc;
}, []);


const res1 = vowelIndices('super')
console.log(res1) // [2,4]
const res2 = vowelIndices('mmm')
console.log(res2) // []