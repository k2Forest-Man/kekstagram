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

const names = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
  'Игорь',
  'Виктор',
  'Катя',
  'Денис',
];

// Случайный элемент массива
const getRandomElementArray = (array) => {
  return names[getRandomNumber(0, array.length - 1)];
};

console.log(getRandomElementArray(names));

//export { getRandomNumber, checkingString, getRandomElementArray };
