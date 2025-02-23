function spinWords(string) {
  return string
    .split(' ')
    .map(word => word.length > 4 ? word.split('').reverse().join('') : word)
    .join(' ');
}


const res1=spinWords("Hey fellow warriors") // "Hey wollef sroirraw" 
const res2=spinWords("This is a test")     // "This is a test" 
const res3 = spinWords("This is another test") // "This is rehtona test"

console.log(res1)
console.log(res2)
console.log(res3)

// var1 replace.
/*Как работает?

\w{5,} — находит слова длиной 5+ символов.
replace(..., word => [...word].reverse().join('')) — переворачивает найденные слова. 
*/
function spinWords(string) {
  return string.replace(/\w{5,}/g, word => [...word].reverse().join(''));
}

// var2 for of
function spinWords(string) {
  let result = [];
  for (const word of string.split(' ')) {
    result.push(word.length > 4 ? word.split('').reverse().join('') : word);
  }
  return result.join(' ');
}
 