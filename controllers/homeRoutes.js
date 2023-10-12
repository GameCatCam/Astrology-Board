const router = require('express').Router();
const { User, ChatGpt, ChatQuestion } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log("*************************************homeroutes.js /" + req)
  try {
    // Get all chats and JOIN with user data
    const chatData = await ChatGpt.findAll({
      include: [
        {
          model: User,
          attributes: ['user'],
        },
      ]

    });
    // Serialize data so the template can read it
    const chats = chatData.map((chat) => chat.get({ plain: true }));
    console.log("*************************************homeroutes.js chats:" + JSON.stringify(chats))
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      chats, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard/:id', async (req, res) => {
  console.log("*************************************homeroutes.js /chat:id" + req)
  try {
    const chatData = await ChatGpt.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user'],
        },
        {
          model: ChatQuestion,
          attributes: ['chat_id', 'chat_question', "chat_question_response"],
        },
      ],
    });

    //res.status(200).json(chatData);

    const chat = chatData.get({ plain: true });
    console.log("*************************************homeroutes.js /chat:id chatData", chat)

    res.render('chat', {
      ...chat,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
/*router.get('/dashboard', withAuth, async (req, res) => {
  console.log("*************************************homeroutes.js /dashboard" + req)
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: ChatGpt }],
    });

    const user = userData.get({ plain: true });

    console.log("*************************************homeroutes.js /dashboard user", user)

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
}); */

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  console.log("*************************************homeroutes.js /login" + req)
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
