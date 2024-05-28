const Router = require('express');
const router = new Router();
const filmRouter = require('./filmRouter');
const userRouter = require('./userRouter');
const genreRouter = require('./genreRouter')

router.use('/user', userRouter)
router.use('/film', filmRouter)
router.use('/genre', genreRouter)

module.exports = router;