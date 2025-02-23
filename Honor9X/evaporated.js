/*
function evaporator(content, evap_per_day, threshold){ 
  let countDays = 0;
  let res = threshold*content/100;
  let newContent = content;
  
  while(newContent>= res) {
    newContent = newContent*(1−evap_per_day/100)
    countDays++;
    newContent<res;
    break;
  }
  return countDays;
}*/

function evaporator(content, evap_per_day, threshold) { 
  let days = 0; // Счётчик дней
  let thresholdVolume = (threshold * content) / 100; // Минимальный объём
  let currentVolume = content; // Текущий объём газа
  
  while (currentVolume >= thresholdVolume) {
    currentVolume = currentVolume * (1 - evap_per_day / 100); // Уменьшаем объём
    days++; // Увеличиваем счётчик дней
  }
  
  return days;
}

const res1 = evaporator(10, 10, 10); // Ожидается 22
console.log(res1);