const express = require('express')
const router = express.Router()
const { indexRouter, messages } = require('./index')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form', { title: 'mini-message-board' })
})

router.post('/', function (req, res, next) {
  console.log(req.body.author)
  console.log(req.body.message)
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router
