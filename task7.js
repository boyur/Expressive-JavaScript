/*
 Сумма диапазона
 Во введении был упомянут удобный способ подсчёта сумм диапазонов чисел:
 console.log(sum(range(1, 10)));
 Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит
 все числа из него, включая начальное и конечное.

 Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию
 и убедитесь, что она возвращает 55.
 В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для
 построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть
 [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает
 [5, 4, 3, 2].

 console.log(sum(range(1, 10)));
 // → 55
 console.log(range(5, 2, -1));
 // → [5, 4, 3, 2]
*/

function range(a, b, step) {
  var arr = [];

  if (step == undefined || 0) {
    step = 1;
  }

  if (step > 0) {
    for (var i = 0; i < b - a + 1; i = i + step) {
      arr.push(a + i);
    }
  } else {
    for (var y = 0; y < a - b + 1; y = y - step) {
      arr.push(a - y);
    }
  }

  return arr;
}

function sum(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(3, 8, 2));
// → [5, 4, 3, 2]