function wordsToMarks(string){
  let sum = 0;
  
  for (let i=0; i<string.length; i++) {
    let valueLetter = string.charCodeAt(i) - 96;
    sum+=valueLetter;
  }
  
  return sum;
}


const res1 = wordsToMarks("attitude") //100
const res2 = wordsToMarks("friends") // 75

console.log(res1)
console.log(res2)

//var2 первое место кодварс
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)