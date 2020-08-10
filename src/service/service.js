'use strict';

const fs = require(`fs`);

const myModule = require(`./ad_data`);

const helpText = `Программа запускает http-сервер и формирует файл с данными для API.

Гайд:
service.js <command>

Команды:
--version:            выводит номер версии
--help:               печатает этот текст
--generate <count>    формирует файл mocks.json`;

let packageJson = require(`../../package.json`);

process.argv.forEach((param) => {
  if (param === `--version`) {
    console.log(packageJson.version);
  } else if (param === `--help`) {
    console.log(helpText);
  } else if (param === `--generate`) {
    let lastElement = process.argv[process.argv.length - 1];
    if (lastElement !== `--generate`) {
      if (Number(lastElement)) {
        if (lastElement >= 1000) {
          console.log(`Не больше 1000 объявлений`);
          process.exit();
        } else {
          let randomAds = myModule.randomAds(Number(lastElement));
          const data = JSON.stringify(randomAds);
          fs.writeFile(`../../mocks.json`, data, (err) => {
            if (err) {
              console.log(`1`);
            } else {
              console.log(`0`);
            }
          });
        }
      } else {
        let randomAd = myModule.randomAds(1);
        const data = JSON.stringify(randomAd);
        fs.writeFile(`../../mocks.json`, data, (err) => {
          if (err) {
            console.log(`1`);
          } else {
            console.log(`0`);
          }
        });
      }
    } else {
      let randomAd = myModule.randomAds(1);
      const data = JSON.stringify(randomAd);
      fs.writeFile(`../../mocks.json`, data, (err) => {
        if (err) {
          console.log(`1`);
        } else {
          console.log(`0`);
        }
      });
    }
  }
});


