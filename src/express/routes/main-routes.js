'use strict';

const {Router} = require(`express`);
const MainRouter = new Router();

MainRouter.get(`/`, (req, res) => res.render(`main`));
MainRouter.get(`/register`, (req, res) => res.render(`sign-up`));
MainRouter.get(`/search`, (req, res) => res.render(`search-result`));
MainRouter.get(`/login`, (req, res) => res.render(`login`));

module.exports = MainRouter;
