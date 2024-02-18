const express = require('express')
const cors = require('cors')
const Flower = require('./config')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/create', async (req, res) => {
  const data = req.body
  console.log(data)
  await Flower.add(data)
  res.send({ msg: 'Flower added' })
})

app.listen(4000, () => console.log('Server is up and running 4000'))
