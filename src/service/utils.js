'use strict';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (array) => {
  const resultArray = array.slice();
  for (let i = resultArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [resultArray[randomNumber], resultArray[i]] = [resultArray[i], resultArray[randomNumber]];
  }

  return resultArray;
};

module.exports = {
  getRandomInt,
  shuffle
};
