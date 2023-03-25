import { getRandomNumber, getRandomElementArray } from './util.js';

//нужное кол-во массивов в объекте photos
const countArraysInObject = 25;

//мин и макс кол-во лайков
const Likes = {
  MIN: 15,
  MAX: 200,
};

//мин и макс кол-во комментов
const Comments = {
  MIN: 2,
  MAX: 5,
};

const idAvatars = {
  MIN: 1,
  MAX: 6,
};

const idComments = {
  MIN: 0,
  MAX: 99,
}

// Сам массив по дз с фотками и комментами
let photos = [];

// Массив, из которого будет генерироваться имя
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

// Массив, из которого будут генерироваться текст комментария — message
// Необходимо взять 1 или 2 случайных предложения из представленных ниже:
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];



// Массив, из которого будет генерироваться имя
const descriptionPhotos = [
  'В простоте есть удивительная красота.',
  'Новая камера. Вроде получилось неплохо :)',
  'Зацените фотку!',
  'Все только начинает становиться действительно хорошим.',
  'Независимо от того, что вы делаете в жизни, убедитесь, что это то, что делает вас счастливыми!',
  'Выходные, пожалуйста, не оставляйте меня сейчас!',
];


// Функция для создания массива комментариев под фото
const createComments = () => {
  const arrayComments = [];

  for (let i = 0; i < getRandomNumber(Comments.MIN, Comments.MAX); i++) {
    arrayComments.push({
      id: getRandomNumber(idComments.MIN, idComments.MAX),
      avatar: 'img/avatar' + getRandomNumber(idAvatars.MIN, idAvatars.MAX) + '.svg',
      message: getRandomElementArray(messages),
      name: getRandomElementArray(names),
    })
  }
  return arrayComments;
}


// Функция для создания объекта в массив с фото
const createObjectPhotos = () => {
  for (let i = 0; i < countArraysInObject; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArray(descriptionPhotos),
      likes: getRandomNumber(Likes.MIN, Likes.MAX),
      comments: createComments(),
    })
  }
}
createObjectPhotos();

export { photos };
