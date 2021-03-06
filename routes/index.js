const router = require('express').Router();
const authRouter = require('./auth')
const navigationRouter = require('./home')
const restRouter = require('./rest')
const fileRouter = require('./files')
const aliasRouter = require('./alias')

router.use('/', aliasRouter)
router.use('/', authRouter)
router.use('/', navigationRouter)
router.use('/rest',restRouter)
router.use('/file',fileRouter)

router.get('*', function(req, res){
  res.render('404.hbs')
});

module.exports = router