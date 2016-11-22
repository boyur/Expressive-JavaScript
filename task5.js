/*
 Рекурсия
 --------
 Мы видели, что оператор % (остаток от деления) может использоваться для определения того, чётное ли число ( % 2).
 А вот ещё один способ определения:
 Ноль чётный.
 Единица нечётная.
 У любого числа N чётность такая же, как у N - 2.
 Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
 */

function isEven(value) {
  if (value < 0) {
    value = ~value;
  }

  if (value == 0) {
    return true;
  } else if (value == 1) {
    return false;
  } else {
    value -= 2;
    return isEven(value);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??