const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const blogRoutes = required('./post');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', blogRoutes);


module.exports = router;