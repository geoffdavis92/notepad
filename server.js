const express = require('express')
const {
  message,
  success,
  error,
  highlight,
} = require('./chalkPresets.js');
const { log } = console
const app = express()

app.set('view engine','pug')
app.set('views',`${__dirname}/views`)
app.use(express.static('assets'))

log()
log(message(`Listening at http://localhost:2017/`))
log()

app.listen(2017)

app.get('/', (req,res) => {
	log({ route: req.route.path })
	res.render('index')
})