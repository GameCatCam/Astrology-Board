const router = require('express').Router();
const { ChatGpt, ChatQuestion } = require('../../models');
// const withAuth = require('../../utils/auth'); (Add once implemented)

router.post('/', /*withAuth,*/ async (req, res) => {
    try {
        const newChat = await ChatGpt.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.status(200).json(newChat)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/:id', /*withAuth,*/ async (req, res) => {
    try {
        const newQuestion = await ChatQuestion.create({
            ...req.body,
            chat_id: req.params.id,

        })

        res.status(200).json(newQuestion)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', /*withAuth(),*/ async (req, res) => {
    try {
        const chatData = await ChatGpt.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        })

        if (!chatData) {
            res.status(404).json({ message: 'No chat with this id!'})
            return;
        }

        res.status(200).json(chatData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;