//Задание №1. Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
// иначе false.
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// };
// let object = {};
// let object2 = {
//     a: 5,
//     b: 12,
// };
// console.log(isEmpty(object)); //true
// console.log(isEmpty(object2)); //false


// Задание №2. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
// объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
// напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.
// function multiplyNumernic(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2;
//         }
//     }
// }
// let object1 = {
//     width: 4,
//     height: -7,
//     title: "Первоначальные данные"
// };
// console.log(object1);
// multiplyNumernic(object1);
// console.log(object1);

// Задание №3. Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения
// до тех пор, пока посетитель его не введёт.
// функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую
// строку или нажав «Отмена». В этом случае функция должна вернуть null.
// function readNumber() {
// let bool=false;
// let number;
// do {
//     number = prompt('Введите число ', 10) ; console.log(typeof number);
//     number = parseFloat(number); console.log(typeof number);
//     if ("" + number  != 'NaN') bool = true;
//
//     console.log(number, number=='NaN');
// } while (bool == false);
//
//     return number;
// }
//
// console.log(readNumber())


// Задание №4. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
// 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с
// плавающей точкой от min до max (но не включая max).
// Пример работы функции:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// function random(min, max) {
//     let result = Math.random() * (max - 1) + min;
//     return result;
// }
// console.log(random(1, 5));

// Задание №5. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое
// (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:
// alert( randomInteger(1, 5) ); // 1alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// function randomInteger(min, max) {
//     let result = Math.random() * max + min;
//     result = Math.floor(result);
//     return result;
// }
//
// console.log(randomInteger(1, 5));




// Задание №6. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым
// символом.
// Например:
// ucFirst("вася") == "Вася";

// function ucFirst(str) {
//     let string = str[0].toUpperCase() + str.slice(1);
//     return string;
// }
// let string;
// string = prompt('Введи слово ');
// console.log(ucFirst(string));


// let ucFirst=(str)=> str[0].toUpperCase() + str.slice(1);
// console.log(ucFirst(prompt('Введи слово ')));






// Задание №7. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
// 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// console.log(checkSpam('buy VIAGRA now'));
// console.log(checkSpam('free xXxXx'));
// console.log(checkSpam("innocent rabbit"));



// Задание №8. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
// она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна
// maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо,
// если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне
// хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"
// function truncate(str, maxlength){
//     if (str.length < maxlength) {
//         return str;
//     } else if (str.length >= maxlength) {
//         return str.slice(0, maxlength - 3) + '...' ;
//     }
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));


// Задание №9. Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем –
// число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
// числовое значение и возвращать его.
// Например:alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));


// Задание №10. Сумма введённых чисел**********************
// Напишите функцию sumInput(), которая:
// •
// •
// •
// •
// Просит пользователя ввести значения, используя prompt и сохраняет их в
// массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое
// значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let arr = [];
//     let sum = 0;
//     while (true) {
//         let num = prompt("Введите число");
//         if (num == null || num == '' || !isFinite(num)) {
//             break;
//         }
//         arr.push(+num);
//     }
//     for (let value of arr) {
//         sum += value;
//     }
//     return sum;
// }
//
// sumInput();



// Задание №11. Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна
// «0»:
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumStart += arr[j];
            maxSum = Math.max(maxSum, sumStart);
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));


// Задание №12. Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его
// результат:
// function checkAge(age) {if (age > 18) {
// return true;
// } else {
// // ...
// return confirm('Родители разрешили?');
// }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?
// function checkAge(age) {
// if (age > 18) {
// return true;
// }
// // ...
// return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?

// ОТвет: отличий нету

// Задание №13. Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Родители разрешили?');
// }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?Используя оператор ||

//Первый вариант
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(40);


//Второй вариант
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
checkAge(4);


// Задание №14. Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


// Задание №15. Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
// умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// Запустить демо
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е.
// целые от 1 и выше.

// function pow(x, n) {
//     let res = x;
//     for (let i = 1; i < n; i++) {
//         res *= x;
//     }
//     return res;
// }
// let x = +prompt('Введите число');
// let n = +prompt('Введите число от 1 и выше');
// if (n < 1) {
//     console.log('Вы ввели не натуральное число');
// } else {
//     console.log(pow(x, n));
// }

// Задание №16. Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
// if (confirm(question)) yes()
// else no();
// }
// ask(
// "Вы согласны?",
// function() { alert("Вы согласились."); },
// function() { alert("Вы отменили выполнение."); }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask("Вы согласны?",
//     () => console.log("Вы согласились."),
//     () => console.log("Вы отменили выполнение.")
// );


// );Задание №17. Робинзон Крузо
// Ваш месячный доход - 3333 попугая. Вы хотите купить пальму за 8000
// попугаев. Вычислите, за какой промежуток времени вы насобираете на
// пальму, при условии что ваши ежемесячные расходы составляют 1750
// попугаев.


// let income = 3333;
// let consumption = 1750;
// let buy = 8000;
// let repository = 0;
// let counter = 0;
//
// while (repository < buy) {
//     repository += income - consumption;
//     counter++;
// }
// console.log(counter);

// Задание №18. Вопросы пользователю
// 1. Спросить у пользователя 10 чисел
// 2. Если число
// - положительное —> ничего не делать
// - отрицательная —> получить их сумму
// 3. Вывести сумму отрицательных чисел, которые ввел пользователь
// ВАЖНО: по условиям задачи в вашем коде должен быть только 1 prompt и
// только 1 цикл for
//
// let sum = 0;
//
// for (let i = 0; i < 10; i++) {
//      let num = +prompt("Введите число");
//     if (num < 0){
//         sum += num;
//     }
// }
// console.log(sum);


// Задание №19. Скопирован ли массив?
// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits; // переменная полчули ссылку на масив
// shoppingCart.push("Банан");
// // что в fruits?  //яблоки груша апельсин
// alert( fruits.length ); // Ответ:4 так как переменные fruits and shoppingCart являются ссылками на один массив


// Задание №20. Операции с массивами
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.Замените значение в середине на «Классика». Ваш код для поиска значения в
// середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
//
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert(styles.shift());
// styles.unshift("Рэп", "Регги");


// Задание №21. Вызов в контексте массива
// Каков результат? Почему?
// let arr = ["a", "b"];
// arr.push(function() {
// alert( this );
// })
// arr[2](); // arr.push добавляет в массив функцию имеющию индекс 2 и потом же вызывается в
// this передастся обновленный массивБ который выведется командой alert