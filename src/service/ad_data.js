'use strict';

const utils = require(`./utils`);

const adTitles = [
  `Продам книги Стивена Кинга.`,
  `Продам новую приставку Sony Playstation 5.`,
  `Продам отличную подборку фильмов на VHS.`,
  `Куплю антиквариат.`,
  `Куплю породистого кота.`,
  `Продам коллекцию журналов «Огонёк».`,
  `Отдам в хорошие руки подшивку «Мурзилка».`,
  `Продам советскую посуду. Почти не разбита.`,
  `Куплю детские санки.`
];

const adDescriptions = [
  `Товар в отличном состоянии.`,
  `Пользовались бережно и только по большим праздникам.,`,
  `Продаю с болью в сердце...`,
  `Бонусом отдам все аксессуары.`,
  `Даю недельную гарантию.`,
  `Если товар не понравится — верну всё до последней копейки.`,
  `Это настоящая находка для коллекционера!`,
  `Если найдёте дешевле — сброшу цену.`,
  `Таких предложений больше нет!`,
  `Две страницы заляпаны свежим кофе.`,
  `При покупке с меня бесплатная доставка в черте города.`,
  `Кажется, что это хрупкая вещь.`,
  `Мой дед не мог её сломать.`,
  `Кому нужен этот новый телефон, если тут такое...`,
  `Не пытайтесь торговаться. Цену вещам я знаю.`
];

const categories = [
  `Книги`,
  `Разное`,
  `Посуда`,
  `Игры`,
  `Животные`,
  `Журналы`
];

let descriptions = () => {
  let desc = [];
  let counter = 0;
  let descSize = utils.getRandomInt(0, 5);
  let shuffledDescriptions = utils.shuffle(adDescriptions);
  while (counter <= descSize) {
    if (utils.getRandomInt(0, 1) === 1) {
      desc.push(shuffledDescriptions[counter]);
      counter++;
    }
  }
  return desc.join(` `);
};

let adCategories = () => {
  let array = [];
  for (let val of categories) {
    if (utils.getRandomInt(0, 1) === 1) {
      array.push(val);
    }
  }
  return array;
};

let randomPicture = () => {
  let itemPicture = utils.getRandomInt(1, 16);
  if (itemPicture < 10) {
    return `item0` + itemPicture + `.jpg`;
  } else {
    return `item` + itemPicture + `.jpg`;
  }
};

let adType = (adTitle) => {
  if (adTitle.split(` `)[0] === `Продам`) {
    return `sale`;
  } else {
    return `offer`;
  }
};

let randomAd = () => {
  let adTitle = adTitles[utils.getRandomInt(0, 8)];
  return {type: adType(adTitle),
    title: adTitle,
    sum: utils.getRandomInt(1000, 100000),
    picture: randomPicture(),
    categories: adCategories(),
    description: descriptions()};
};

const randomAds = (number)=> {
  let i;
  let array = [];
  for (i = 1; i <= number; i++) {
    array.push(randomAd());
  }
  return array;
};

module.exports = {
  randomAds
};
