const router = require('express').Router();
const chatRoutes = require('./chatRoutes');
const userRoutes = require('./userRoutes')

const chatgptRoutes = require('./chatgptRoutes')

router.use('/users', userRoutes);
router.use('/chats', chatRoutes);
router.use('/chatgpts', chatgptRoutes);

module.exports = router;
