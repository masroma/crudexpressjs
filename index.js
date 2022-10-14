const express = require('express')
const app = express()
const port = 3000
const apiRouter = require('./routes/api');
const cors = require('cors')
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Worldsss!')
})

app.use('/api/blog',apiRouter);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})


