function bump(x){
   const countN = Array.from(x).filter(el=> el === "n").length;
   //const count_ = Array.from(x).filter(el=> el === "_").length;
   
   if (countN <= 15) return "Woohoo!";
   return "Car Dead"
}

function bump(x) {
  const countN = [...x].filter(el => el === "n").length;
  return countN <= 15 ? "Woohoo!" : "Car Dead";
}

const res1 = bump("n") // "Woohoo!"
const res2 = bump("__nn_nnnn__n_n___n____nn__nnn") // "Woohoo!"
const res3 = bump("nnn_n__n_n___nnnnn___n__nnn__") // "Woohoo!"
const res4 = bump("_nnnnnnn_n__n______nn__nn_nnn") //"Car Dead"
const res5 = bump("______n___n_") //"Woohoo!");
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)