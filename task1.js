/*
 Треугольник в цикле
 -------------------
 Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 */

var text = '';

for (var i = 0; i < 7; i++) {
  text += '#';
  console.log(text);
}