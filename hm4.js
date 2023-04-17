// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function Num(a) {
    return a % 2 === 0;
}

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (Num(i)) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [0, 0, 0, 0, 0];
let i = 0;

while (i < arr.length) {
    arr[i] = getRandomInt(0, 9);
    i++
}

console.log(arr);

function minNumber(array) {
    let index = 0;
    let min = array[index];
    while(index < array.length)
    {if(min > array[index]) {
        min = array[index];
        index++
    }

    else{
        index++
    }}
    console.log(`Минимальное число ${min}`);
}
minNumber(arr)

function findNumber(array) {
    let index = 0;
    let count = 0;
    while(index < array.length)
    {
        if(array[index] == 3) {
        index++;
        count++
        }
        else{
        index++
        }
        }
    return count;
}

if (findNumber(arr) > 0)
{
    console.log(`Есть число 3, их количество ${findNumber(arr)}`);
}
else {
    console.log(`Чисел 3 нет`);
}



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

var str = "x"
console.log(str)
for(var x = 0; x < 20; x++){
console.log(str += "xx")
}