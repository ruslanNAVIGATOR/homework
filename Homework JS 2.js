// ЗАдание 1
/*    let i = 3;
 while (i) {
     alert( i-- );
 }
 */

// выведет 1 , так как в последней итерации выведет 1 и потом вычтет 1, так же
// в следующем цикле i будет равно 0

//Задание 2
/*
let A = 29.47;
let B = 49.69;
let C = 79.45;
if (B > A && B < C) {
    A = A * 2;
    B = B * 2;
    C = C * 2;
    alert(`A = ${A}, B = ${B}, C = ${C}`);
} else {
    A = 0 - A;
    B = 0 - B;
    C = 0 - C;
    alert(`A = ${A}, B = ${B}, C = ${C}`);
}
*/

//Задание 3
/*
let A = 29.47;
let B = 49.69;
let C = 79.45;
if ((B > A && B < C) || (B < A && B > C)) {
    A = A * 2;
    B = B * 2;
    C = C * 2;


    alert(`A = ${A}, B = ${B}, C = ${C}`);
} else {
    A = 0 - A;
    B = 0 - B;
    C = 0 - C;
    alert(`A = ${A}, B = ${B}, C = ${C}`);
}
*/

//задагие 4

/*
let A = 1;
let B = 5;
let C = -4;
let resAB = A * B;
if (resAB < 0) {
    resAB *= -1;
}
let resAC = A * C;
if (resAC < 0) {
    resAC *= -1;
}
if (resAB < resAC) {
    alert(`Точка B ближе и на ${B} от точки A`);
} else {
    alert(`Точка C ближе и на ${C} от точки A`);
}
*/
//Задание 5
/*
let A = {
    OX: 0,
    OY: 0,
};
if (A.OX === 0 && A.OY === 0) {
    console.log(0);
} else if (A.OX === 0 && A.OY !== 0) {
    console.log(1);
} else if (A.OX !== 0 && A.OY === 0) {
    console.log(2);
} else {
    console.log(3);
}
*/

//Задание 6

/*
let A = {
    OX: 2,
    OY: -3,
};
if (A.OX > 0 && A.OY > 0) {
    console.log('I');
} else if (A.OX < 0 && A.OY > 0) {
    console.log('II');
} else if (A.OX < 0 && A.OY < 0) {
    console.log('III');
} else if (A.OX > 0 && A.OY < 0) {
    console.log('IV');
 */

// Задание 7
/*
let A = {
    OX: 1,
    OY: 1,
};

let B = {
    OX: 1,
    OY: 4,
};

let C = {
    OX: 5,
    OY: 1,
};

let D = {};
D.OX = Math.max(A.OX, B.OX, C.OX);

D.OY = Math.max(A.OY, B.OY, C.OY);

console.log(`x: ${D.OX}, y: ${D.OY}`);

*/


// Задание 8


/*
let year = 2005;

if (year % 4 === 0) {

    if (year % 100 === 0 && year % 400 !== 0) {
        console.log(`В ${year} году 365 дней `);
    } else {

        console.log(`В ${year} году 366 дней `);
    }
} else {

    console.log(`В ${year} году 365 дней `);
}
*/

//Задание 9
/*
let number = 39;
if (number > 0) {
    if (number % 2 == 0) {
        console.log(number + "    положительное четное число")
    } else {
        console.log(number + "    положительное нечетное число")
    }
} else if (number < 0) {
    if (number % 2 == 0) {
        console.log(number + "    отрицательное четное число")
    } else {
        console.log(number + "    отрицательное нечетное число")
    }
} else if (number == 0) {
    console.log(number + "     нулевое число")
} else {
    console.log(number + "     не существует")
}
 */

// Задание 10
/*
let num = 371;
if (num % 2 === 0) {
    if (num < 10) {
        alert(`${num}    четное однозначное число`);
    } else if (num < 100) {
        alert(`${num}    четное двузначное число`);
    } else if (num < 1000) {
        alert(`${num}    четное трехзначное число`);
    }
} else {
    if (num < 10) {
        alert(`${num}    нечетное однозначное число`);
    } else if (num < 100) {
        alert(`${num}    нечетное двузначное число`);
    } else if (num < 1000) {
        alert(`${num}    нечетное трехзначное число`);
    }
}
*/


// Задание 11

/*

// Префиксный ++i:
let i = 0;
while (++i < 5) alert( i );     // 1, 2, 3, 4

// Постфиксный j++
let j = 0;
while (j++ < 5) alert( j );    // 1, 2, 3, 4, 5

*/


// Задача 12

/*

// Постфикс:
for (let i = 0; i < 5; i++) alert( i );  // 0, 1, 2, 3, 4

// Префикс:
for (let j = 0; j < 5; ++j) alert( j );  // 0, 1, 2, 3, 4
*/

// Задача 13
/*
let res = "Результат : ";
for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

 */

// Задача 14

/*
let i = 0;
while (i < 3)    {
    alert( 'number ${i}!' );
    i++;
}
*/

// Задание 15

/*
while (true) {
    let num = prompt('Введите число больше 100');
    if (num > 100) break;
        else if (num === null) break;
}
*/

//Задание 16

/*
let num = 2;
let even_num;
while (num < 10) {
    even_num = false;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            even_num = true;
        }
    }
    if (even_num !== true) {
        console.log(num);
    }
    num++;
}
*/

//Задание 17

/*
let result1 = +prompt(" Введите 1 число ");
let result2 = +prompt(" Введите 2 число ");

alert((result1+result2)/2);
 */

//Задание 18

/*

let result = +prompt("введите число чтобы мы с радостью возвели его в квадрат");
let result **= 2;

alert(result);
 */

//Задание 19

/*
let result_1 = +prompt("введите 1 число");
let result_2 = +prompt("введите 2 число");
let result_3 = +prompt("введите 3 число");

let max = Math.max(result_1, result_2, result_3);
let min = Math.min(result_1, result_2, result_3);

alert(max-min);
 */


//Задание 20

/*
let result = +prompt("введите число");
if (result%2 == 0) {
    alert("четное")
} else {
    alert("нечетное")
}
 */
//Задание 21

/*
let a = 47;
let length = String(a).length;
let sum = 0;
for (let i = 0; i < length; i++) {
    sum += +String(a).substr(i, 1)
}
console.log("сумма цифр = " + sum);
console.log("количество цифр = " + length);
 */

//Задание 22


/*
let toConvert = prompt('1) Введите цифру 1 для перевода из см в дюймы n/2) Введите цифру 2 для перевода из дюймов в см');
if (+toConvert === 1) {
    let num1 = prompt('Введите число в см');
    alert(`Результат: ${+num1 * 2.54} дюйма`);

} else if (+toConvert === 2) {

    let num2 = prompt('Введите число в дюймах');
    alert(`Результат: ${(+num2 / 2.54).toFixed(2)} дюйма`);
}
*/
//Задание 23

/*
let num = prompt('Введите число от 100 до 999');
if (num % 2 === 0) {
    alert(`Сумма цифр числа ${num}: ${+num[0] + +num[1] + +num[2]}`);
} else {
    alert(`Произведение цифр числа ${num}: ${num[0] * num[1] * num[2]}`);
}
*/

//Задание 24

/*
let A = prompt('Введите длину первой стороны треугольника');
let B = prompt('Введите длину второй стороны треугольника');
let C = prompt('Введите длину третий стороны треугольника');
alert(`${(+A + +B) > +C && (+A + +C) > +B && (+C + +B) > +A ? 'это треугольник :)' : 'это не похоже на треугольник'}`);
*/
//Задание 25

/*
let A = {
    OX: 4,
    OY: 9,
};
let R = 10;
alert(`${((Math.sqrt(A.OX) + Math.sqrt(A.OY))) <= Math.sqrt(R) ?
    'Эта точка лежит внутри окружности' : 'эта точка за пределами окружности'}`);
*/
//Задание 26

/*
let user = {};

user.name = 'John';

user.surname = 'Smith';

user.name = 'Pete';

delete user.name;
*/

//Задание 27
/*
const user = {
    name: "John"
};
user.name = "Pete";
*/

//Это будет работать так как объект может быть изменен

//Задание 28

/*
let salaries = {
    Joу: 90,
    Petter: 180,
    Roman: 120
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
*/


//Задание 29

// я считаю что цикл бесконечный в связи с плаваюшей точкой при сложении
//let i = 0;
// while (i != 10) {
// i += 0.2;
// }