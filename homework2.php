<?php
//1)Дано два числа 42 и 55 определите при помощи тернарной операции какое число больше.
print "\n ----Task1---------\n";
echo (55>42)?55:42;




//2)Используй вместо статических чисел функцию rand() для задачи (1);
//Пример я ограничил набор случайных чисел от 5 до 15 echo rand(5, 15);

print "\n ----Task2---------\n";
$a=rand(1,5);
$b=rand(1,15);
echo "first number - $a, second number - $b\n";
$res = ($a>$b)?"number $a bigger than $b":"second number is bigger - $b > $a";
echo $res."\n";




//3)Сокращение Имени и Отчества. Возьмите за основу свою ФИО. У вас будет 3 переменные. (Ф.И.О.) Ваша программа должна
// сократить Имя и Отчество. вот пример:
//(Иванов Иван Иванович) => (Иванов И. И.)
print "\n ----Task3---------\n";
$firstName = "ruslan";
$secondName ="Limanskii";
$fathersName = "Evgenevich";
echo $secondName." ".$firstName[0].". ".$fathersName[0].".\n";





//4)Вам нужно разработать программу, которая считала бы количество вхождений какой-нибудь выбранной вами цифры в
// выбранном вами числе. Например: цифра 7 в числе 123456789 встречается 1 раза (ограничите себя функцией
// rand(1, 99999) – это ваше случайное число) используй функцию substr_count()
print "\n ----Task4---------\n";
$randNumberString = rand(1, 99999);
$randNumber = rand(0,9);
$res = substr_count($randNumberString,$randNumber);


echo "First number - $randNumberString, requested number - $randNumber, this number used - $res times \n";






//5)Переменные:
//1-Создайте переменную $a и присвойте ей значение 3. Выведите значение этой переменной на экран.

print "\n ----Task5---------\n";
$a=3;
echo 'Number 3: '.$a."\n";

//2-Создайте переменные $a=10 и $b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
print "\n ----Task6---------\n";
$a=10; $b=2;
echo "Sum: $a + $b = ".($a+$b)."\n";
echo "Delta: $a - $b =". ($a-$b)." \n";
echo "Multiply: $a * $b =". ($a*$b)." \n";
echo "Quotient: $a % $b =". ($a%$b)." \n";

//3-Создайте переменные $c=15 и $d=2. Просуммируйте их, а результат присвойте переменной $result. Выведите на экран
// значение переменной $result.
print "\n ----Task6---------\n";
$c=15; $d=2;
$result = $c+$d;
print 'Sum of '.$c.'+'.$d.'='.$result."\n";

//4-Создайте переменные $a=10, $b=2 и $c=5. Выведите на экран их сумму.
print "\n ----Task7---------\n";
$a=10; $b=2; $c=5;
echo "Sum of $a + $b + $c = ".($a+$b+$c);

//5-Создайте переменные $a=17 и $b=10. Отнимите от $a переменную $b и результат присвойте переменной $c.
// Затем создайте переменную $d, присвойте ей значение




//6)Сложите переменные $c и $d, а результат запишите в переменную $result. Выведите на экран значение переменной $result.
print "\n ----Task8---------\n";
$a=17;$b=10;
$c=$a-$b;
$d=$c;
$result = $c + $d;
print "variables: $a, $b, $c, $d, result = ($a-$b)*2= $result";

//7)Строки:
//1-Создайте переменную $text и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
print "\n ----Task9---------\n";
$text = 'Привет, Мир!';
echo $text;

//2-Создайте переменные $text1='Привет, ' и $text2='Мир!'. С помощью этих переменных и операции сложения строк
// выведите на экран фразу 'Привет, Мир!'.
print "\n ----Task10---------\n";
$text1='Привет, '; $text2='Мир!';
echo $text1.$text2;

//3-Напишите скрипт, который считает количество секунд в часе, сутках, неделе, месяце из 30 дней.
print "\n ----Task10---------\n";
$secInMuntes = 60;
$minInHours = 60;
$hoursInDay = 24;
$daysInWeek = 7;
$daysInMonth = 30;
echo "Sec in one hour = ".$secInMuntes*$minInHours."\n";
echo "Sec in one day = ".$secInMuntes*$minInHours*$hoursInDay."\n";
echo "Sec in one week = ".$secInMuntes*$minInHours*$hoursInDay*$daysInWeek."\n";
echo "Sec in one month(30days) = ".$secInMuntes*$minInHours*$hoursInDay*$daysInMonth."\n";










//8)Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
// Количество строк кода при этом не должно измениться! Код для переделки:
//<?php
//$var = 1;
//$var = $var + 12;
//$var = $var - 14;
//$var = $var * 5;
//$var = $var / 7;
//$var = $var + 1;
//$var = $var - 1;
//echo $var;







//Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
$sec= rand (0,60);
$min = rand (0,60);
$hour = rand (0, 23);
echo "$hour : $min : $sec";



//Переделайте этот код так, чтобы в нем использовалась операция .=. Количество строк кода при этом не должно измениться!
//$text = 'Я';
//$text = $text .' хочу' ;
//$text = $text .' знать' ;
//$text = $text .' PHP!' ;
//echo $text;
$text = 'Я';
$text .= ' хочу' ;
$text .= ' знать' ;
$text .= ' PHP!' ;
echo $text;


//Задана переменная $foo = 'bar'; Создать переменную bar, в которой будет храниться число 10. Вывести число 10,
// используя только переменную $foo
$foo = 'bar';
$bar = 10;
echo $$foo;


//Какой будет результат если
//$a = 2; $b = 4;
//echo $a++ + $b;
//echo $a + ++$b;
//echo ++$a + $b++;
$a = 2; $b = 4;
echo "$a++ + $b = ". ($a++ + $b) ."\n"; //6
$a = 2; $b = 4;
echo "$a + ++$b = ".($a + ++$b) ."\n";//7
$a = 2; $b = 4;
echo "++$a + $b++ = ".(++$a + $b++) ."\n"; //7
//sorry for such solution but this one is a nature one  :-)



//Функции для проверки типов данных. Определите что у вас в переменной. Решение должно быть универсальным.
// Используйте тернарную операцию.
//Используй все эти функции:
//isset()
//gettype()
//is_null()
//empty()
//is_integer($a)
//is_double ($a)
//is_string ($a)
//is_numeric($a)
//is_bool($a)
//is_scalar($a)
//is_null($a)
//is_array($a)
//is_object($a)
//
//пример
//$a = ‘asd’;
//echo isset($a) ? ‘переменная существует’ : ‘переменная не существует’;
//пример
//$a = ‘asd’;
//echo is_string($a) ? ‘переменная строка’ : ‘переменная не строка’;
unset($a);
$a=NULL;
echo isset($a) ? "the variable is SET \n" : "the variable has NOT BEEN DEFINED \n";
echo "the type of variable is ".mb_strtoupper(gettype($a))."\n";
echo is_null($a) ?  "the variable is the NULL \n":"the variable is not the NULL \n"; // if ($a===NULL) is faster than is_null()
echo empty($a) ? "the variable is EMPTY\n": "the variable HAS some DATA\n";
echo is_integer($a) ? "the variable is an INTEGER \n":"the variable is not an INTEGER \n";
echo is_double($a) ? "the variable is a DOUBLE\n":"the variable is not a DOUBLE\n";
echo is_string($a) ? "the variable is a STRING \n":"the variable is not a STRING \n";
echo is_numeric($a) ? "the variable is NUMERIC \n":"the variable is not NUMERIC \n";
echo is_bool($a) ? "it is BOOLEAN variable \n":"it is not BOOLEAN variable\n";
echo is_scalar($a) ? "it is one of: int, float, string or bool.\n":"it is one of: array, object, resource, null \n";
echo is_array($a) ? "the variable is an ARRAY\n":"the variable is not an ARRAY\n";
echo is_object($a) ? "the variable is a OBJECT (class/function)\n":"the variable is not an OBJECT\n";














//Даны два числа. Найти их сумму и произведение.
//Даны два числа. Найдите сумму их квадратов.
//Даны три числа. Найдите их среднее арифметическое.

$a=2; $b=4;
echo "Numbers a= $a , b = $b \n";
echo "Sum and multiply: ".($a+$b)." ".($a*$b)."\n";
echo "Sum of their squares: ".(pow($a,2) + $b**2)."\n";
echo "Arithmetical mean: ".(($a+$b)/2)."\n";


//Даны три числа x,y и z. Найдите (x+1)−2(z−2x+y)
$x=0;$y=1;$z=0;
echo "Numbers x= $x , y = $y , z = $z \n";
echo "(x+1)−2(z−2x+y)= ".(($x+1)-2*($z-2*$x+$y))."\n";


//Дано натуральное числа. Найдите остатки от деления этих чисел на 3 и на 5. Дано число. Увеличьте его на 30%, на 120%.

$a = rand(1,20);
echo "remainder of division of $a by 3 is ".($a%3)."\n";
echo "remainder of division of $a by 5 is ".($a%5)."\n";
echo "increased number $a by 30% is ".($a*1.3)."\n";
echo "increased number $a by 120% is ".($a*2.2)."\n";


//Дано два числа. Найдите сумму 40% от первого числа и 84% от второго числа.
// Дано трехзначное числа. Найдите сумму его цифр.
$a = rand(1,20); $b=rand (1,20);
echo "40% of number $a is ".($a*0.4)."\n";
echo "84% of number $b is ".($b*0.84)."\n";
echo "Their sum is ".(($a*0.4)+($b*0.84))."\n";

$number = rand(100,999);
$strFromNubmer = (string)$number;
$res = $strFromNubmer[0]+$strFromNubmer[1]+$strFromNubmer[2];
echo "Sum of all numbers in $number is $res \n";


//Дано трехзначное числа. Поменяйте среднюю цифру на ноль. Найдите число, полученное выписыванием в обратном порядке
// цифр данного трехзначного натурального числа.
echo "Number $number with 0 in the center - $strFromNubmer[0]0$strFromNubmer[2] \n";
echo "Sum of all numbers in this number is ".($strFromNubmer[0]+$strFromNubmer[2])." \n";



//задача деление по модулю. определить какое число четное или не четное. Реализовать через тернарную операцию.
$a = rand(-10,1); $b = rand(-10,1);
echo "Abs divide $a / $b = ".(abs($a/$b))."\n";
$x=rand(1,20);
echo ($x%2==1)?"the $x is odd": "the $x is even number";
?>


