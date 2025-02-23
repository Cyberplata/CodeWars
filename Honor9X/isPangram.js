function isPangram(string){
  const filteredLetters = string.toLowerCase().match(/[a-z]/gi)
  return new Set(filteredLetters).size === 26
}

// var2
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

// var3
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

const res1 = isPangram("The quick brown fox jumps over the lazy dog.")
const res2 = isPangram("This is not a pangram.")

console.log(res1)
console.log(res2)