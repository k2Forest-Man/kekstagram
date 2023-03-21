// Функция, возвращающая случайное целое число из переданного диапазона включительно (min, max)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(1, 33);



// Функция для проверки максимальной длины строки
const checkingString = (textString, countString) => {
  return textString.length <= countString;
};

checkingString ('Проверочная строка ', 50);


// Случайный элемент массива
const getRandomElementArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

//export { getRandomNumber, checkingString, getRandomElementArray };
