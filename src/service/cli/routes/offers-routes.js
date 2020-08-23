'use strict';

const fs = require(`fs`).promises;
const {Router} = require(`express`);
const offersRouter = new Router();

const FILENAME = `mocks.json`;

offersRouter.get(`/`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res.json([]);
  }
});


module.exports = offersRouter;
