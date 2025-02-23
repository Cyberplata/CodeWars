var list = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

function isRubyComing(list) {
  //return list.filter(el=>el.language==='Ruby') ? true : false;
    return list.find(el=>
      el.language.includes('Ruby')
    ) ? true : false;
}

const res1 = isRubyComing(list)
console.log(res1) // true