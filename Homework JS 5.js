// Задание No1. Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
// Содержимое документа index.html:
// <!DOCTYPE HTML>
// <html>
// <head>
// <meta charset="utf-8">
// </head>
// <body>
// <input type="button" id="hider" value="Нажмите, чтобы спрятать
// текст" />
// <div id="text">Текст</div>*/
//
// <script>
//     document.querySelector('#hider').onclick = function() {
//     document.querySelector('#text').hidden = true;
// }
// </script>
//
// </body>
// </html>
// </html>
// Задание No2. Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения
// кода?*/
//
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// //Обработчик addEventListener не будет удалён, т.к. в removeEventListener передана не та же функция,
// // а другая, с одинаковым кодом, поэтому при клике выведется 1.
// button.onclick = () => alert(2);
// //Обработчик button.onclick отработает независимо от addEventListener,поэтому выведется 2.
//

// Задание No3. Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr
// неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/
// function copySorted(arr) {
//     return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
//
// alert(sorted);
// alert(arr);

// Задание No4. Вычислить факториал
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на
// "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6*/
//
// function factorial(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n * factorial(n-1);
//     }
// }
// alert(factorial(5));

// Задание No5. Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То
// есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5,
// 8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных
// явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:*/
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// // P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77)
// // должен занимать не более доли секунды.