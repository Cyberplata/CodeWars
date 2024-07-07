// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.
// Если в имени ровно 4 буквы, то это точно ваш друг! В противном случае, будьте уверены, это не...
// Пример: Ввод = ["Райан", "Киран", "Джейсон", "Юс"], Вывод = ["Райан", "Юс"]
//
// то есть
//
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Примечание: сохраните исходный порядок имен в выходных данных.

function friend(friends){
    return friends.filter(f => f.length === 4)
}

const res1 = friend(["Ryan", "Kieran", "Mark"]) // ["Ryan", "Mark"]
const res2 = friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) // ["Ryan"]
const res3 = friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]) // ["Jimm", "Cari", "aret"]
const res4 = friend(["Love", "Your", "Face", "1"]) // ["Love", "Your", "Face"]