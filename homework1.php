
<!--//все переменные выводим через echo/print/print_r-->
<!--//создать переменную строку ваше имя и вывести на экран-->
<!--создать переменную возраст и вывести на экран-->
<!--создать переменную и присвоить ей число pi вывести переменную на экран-->
<!--создать переменную массив ['alex', 'vova', 'tolya'] вести ее на экран-->
<!--создать переменную массив ['alex', 'vova', 'tolya', ['kostya', 'olya']] вести ее на экран-->
<!--создать переменную массив ['alex', 'vova', 'tolya', ['kostya', 'olya', ['gosha', mila]]] вести ее на экран-->
<!--создать переменную массив [['alex', 'vova', 'tolya'], ['kostya', 'olya'], ['gosha', mila]] вести ее на экран-->

<?php

$name = "Ruslan";
echo "$name"."\n";
$a = "20";
print "$a"."\n";

$pi = "3.14";
print $pi ."\n";

$arrNames1 = ['alex', 'vova', 'toly'];
print_r ($arrNames1)."\n";

$arrNames2 = ['alex', 'vova', 'tolya', ['kostya', 'olya']];
print_r ($arrNames2)."\n";

$arrNames3 = ['alex', 'vova', 'tolya', ['kostya', 'olya', ['gosha', 'mila']]];
print_r ($arrNames3)."\n";


$arrNames4 = [['alex', 'vova', 'tolya'], ['kostya', 'olya'], ['gosha', 'mila']];
print_r ($arrNames4);