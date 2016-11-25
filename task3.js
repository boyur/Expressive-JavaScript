/*
 Шахматная доска
 ---------------
 Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
 На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
 */

String.prototype.repeat = function(n) {
  return new Array(n+1).join(this);
};

var size = 10;

for (var b = 1; b < size; b++) {
  if (b % 2) {
    console.log('# '.repeat(size/2));
  } else {
    console.log(' #'.repeat(size/2));
  }
}