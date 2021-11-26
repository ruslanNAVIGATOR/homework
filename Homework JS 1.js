//Задание 1
/*
let name = "Ruslan";
let admin = name;

alert(admin);

 */
//Задание 2
/*
const BIRTHDAY = '18.04.1982'; // Можно использовать заглавніе буквы.
const AGE = someCode(BIRTHDAY); // Иожно для обеих переменных.
*/

//Задание 3
/*
let name = "Ilya";
alert( `hello ${1}` ); // 1
alert( `hello ${"name"}` ); // name
alert( `hello ${name}` ); // Ilya
*/

//Задание 4
/*
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2

"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 // NaN
7 / 0  // Infinity
" -9 " + 5 // -9 5
" -9 " - 5 // -14
null + 1  // 1
undefined + 1 // NaN

 */
//Задание 5
/*
let a = 1, b = 1;
let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1
alert(d);

 */
// Задание 6
/*
let a = 2;
let x = 1 + (a *= 2);
alert(x); //x=5 a=4

 */
// Задание 7
/*
5 > 4  // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null  //false
null == "\n0\n" //false
null === +"\n0\n" //false

 */
//задание 8
/*
let firstname = prompt("Введите ваше имя");
let username = firstname;
alert(username);

 */
// Задание 9
/*
//Выведется ли alert? - Да
if ("0") {
    alert( 'Привет' );
}
 */
// Задание 10
/*
let quation = prompt("What's the 'официальное название' Javascript?");
if (quation == "ECMAScript"){
    alert(' Правильно! ');
}
else{
    alert(' You don`t know? ')
    alert("ECMAScript!")
}
*/
// Задание 11
/*
let value = prompt('Введите число', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}
*/

// Задание 12
/*
alert( null || 2 || undefined ); //2
*/

// Задание 13
/*
alert( alert(1) || 2 || alert(3) ); //1
 */

// Задание 14
/*
alert( 1 && null && 2 ); // null
 */

// Задание 15
/*
alert( alert(1) && alert(2) ); //1
 */

// Задание 16
/*
alert( null || 2 && 3 || 4 ); //3
 */

//Задание 17
/*
if (age >=14 && age <=90)
 */

// Задание 18
/*
//вариант1
if (age < 14 || age > 90)
//вариант2
if (!(age >= 14 && age <= 90))
 */


//Задание 19
/*
if (-1 || 0) alert( 'first' );  // alert выполняется
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
 */

// Задание 20
/*
let userName = prompt("Who's there?", '');

if (userName == 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass == 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass == '' || pass == null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName == '' || userName == null) {
    alert( 'Отменено' );
} else {
    alert( "I don't know you" );
}

 */

//Задание 21
/*
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

 */

//Задание 22
/*
let number = prompt ("Введите число");
if (number >= 0)  {
    alert(++number);

}
else if (number < 0){
    alert (number);
}

 */
// Задание 23
/*
let number = prompt ("Введите число");
if (number >= 0)  {
    alert(++number);

}
else if (number < 0){
    alert (number -= 2);
}

 */
// Задание 24
/*
    let number = prompt ("Введите число");
    if (number > 0)  {
        alert(++number);

    }
    else if (number < 0){
        alert (number -= 2);
    }
    else if (number = 0) {
        alert (number += 10);
    }

 */
// Задание 25
/*
let number_1 = prompt("Введите 1 число)");
let number_2 = prompt("Введите 2 число)");
let number_3 = prompt("Введите 3 число)");

if (number_1 >= 0 && number_2 >= 0 && number_3 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 3);
}
else if (number_1 >= 0 && number_2 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
}
else if (number_2 >= 0 && number_3 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
}
else if (number_1 >= 0 && number_3 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
}
else if (number_1 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
}
else if (number_2 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
}
else if (number_3 >= 0){
 alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
}
else{
 alert("Положительных чисел нет")
}

 */

//Задание 26
/*
let 1 = prompt('Введите 1 целое число.');
let 2 = prompt('Введите 2 целое число.');
let 3 = prompt('Введите 3 целое число.');
if (a)
{
    if (a > 0)
    {
        alert('Число положительное.');
    } else if (a < 0)
    {
        alert('Число отрицательное.');
    }
}
if (b)
{
    if (b > 0)
    {
        alert('Число положительное.');
    } else if (b < 0)
    {
        alert('Число отрицательное.');
    }
}
if (c)
{
    if (c > 0)
    {
        alert('Число положительное.');
    } else if (c < 0)
    {
        alert('Число отрицательное.');
    }
} else
{
    alert('Число не подходит');
}
*/

// Задание 27
/*
   let number_1 = prompt ("Введите 1 число");
    let number_2 = prompt ("Введите 2 число");
    if (number_1 > number_2 ){
        alert(number_1);
    }
    else if (number_1  < number_2 ) {
        alert(number_2)
    }
 */
// Задание 28
/*
  let number_1 = prompt ("Введите 1 число");
    let number_2 = prompt ("Введите 2 число");
    if (number_1 > number_2 ){
        alert(number_1);
        alert(number_2);
    }
    else if (number_1  < number_2 ) {
        alert(number_2);
        alert(number_1);
    }

 */

//Задание 29
/*
let A = 3;
let B = 1;
A = A + B;
B = A - B;
A = A - B;
alert(A);
alert(B);
*/

//Задание 30
let A = 2;
let B = 7;
if (A !== B)
{
    A = A + B;
    B = A - B + B;
} else if (A == B)
{
    A = 0;
    B = 0;
}
alert(A);
alert(B);
*/

//Задание 31
/*
let A = 1;
let B = 5;
if (A !== B)
{
    if (A > B)
    {
        alert(A);
    } else if (B > A)
    {
        alert(B);
    }
} else if (A == B)
{
    A = 0;
    B = 0;
}
alert(A);
alert(B);

*/




// Задание 32
/*
let number_1 = prompt ("Введите 1 число");
let number_2 = prompt ("Введите 2 число");
let number_3 = prompt ("Введите 2 число");
if (number_1 > number_2 || number_1 > number_3){
    alert(number_1 + "  наибольшее число");

}
else if (number_2 > number_1 || number_2 > number_3 ) {
    alert(number_2 + "  наибольшее число");

}
else if (number_3 > number_1 || number_3 > number_2 ) {
    alert(number_3 + "  наибольшее число");

}


 */

// Задание 33
/*
   let number_1 = prompt ("Введите 1 число");
    let number_2 = prompt ("Введите 2 число");
    let number_3 = prompt ("Введите 3 число");
    if ((number_1 > number_2 && number_1 < number_3) || (number_1 < number_2 && number_1 > number_3)){
        alert(number_1 + "  среднее число");

    }

    else if ((number_2 > number_1 && number_2 < number_3 ) || (number_2 < number_1 && number_2 > number_3 )) {
        alert(number_2 + "  среднее число");

    }
    else if ((number_3 > number_1 && number_3 < number_2 ) || (number_3 < number_1 && number_3 > number_2 )){
        alert(number_3 + "  среднее число");

    }

 */

//Задание 34
/*
    let number_1 = prompt ("Введите 1 число");
    let number_2 = prompt ("Введите 2 число");
    let number_3 = prompt ("Введите 3 число");
    if (number_1 < number_2 && number_1 < number_3){
        alert(number_1);
        if (number_3 > number_2)
            alert(number_3);
        else alert(number_2)
    }
    else if (number_1  > number_2 && number_2 < number_3) {
        alert(number_2);
        if (number_1 > number_3)
            alert(number_1);
        else alert(number_3)
    }
    else if (number_3  < number_1 && number_3 < number_2) {
        alert( number_3);
        if (number_1 > number_2)
        alert(number_1);
        else alert(number_2)
    }

 */

// Задание 35
/*
 let number_1 = prompt ("Введите 1 число");
    let number_2 = prompt ("Введите 2 число");
    let number_3 = prompt ("Введите 3 число");
    if (number_1 > number_2 && number_1 > number_3){
        if (number_3 > number_2)
            alert(+number_3 + +number_1);
        else alert(+number_2 + +number_1)
    }
        else if (number_1  < number_2 && number_2 > number_3) {
        if (number_3 > number_1)
            alert(+number_3 + +number_2);
        else alert(+number_2 + +number_1)
        }
        else if (number_3  > number_1 && number_3 > number_2) {
        if (number_1 > number_2)
            alert(+number_3 + +number_1);
        else alert(+number_2 + +number_3)
        }
 */

// Задание 36
/*
let A = 3;
let B = 3;
let C = 0;
if (A == B && C !== A)
{
    alert(C);
}
else if (B == C && A !== B)
{
    alert(A);
}
else if (A == C && B !== A)
{
    alert(A);
} 
 */
