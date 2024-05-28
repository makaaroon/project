const FilmRouter = require('express');
const filmrouter = new FilmRouter();
const filmController = require('../controllers/filmController')


filmrouter.post('/', filmController.create);
filmrouter.get('/', filmController.getAll)
filmrouter.get('/:id', filmController.getOne)

module.exports = filmrouter;