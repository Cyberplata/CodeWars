function solution(string) {
    return string.replace(/([A-Z])/g, " $1");
}

const res1 = solution("camelCasing") // "camel Casing"
const res2 = solution("identifier") // "identifier"
const res3 = solution("") // ""
const res4 = solution("camelCasingTest") // "camel Casing Test"

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)