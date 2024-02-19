const express = require('express');
const app = express();

const PORT = 1337;

const cors = require('cors')
const Flower = require('./config')


app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
  const snapshot = await Flower.get()
  const list = snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()}) )
  res.send(list)
})


app.post('/create', async (req, res) => {
  const data = req.body
  await Flower.add(data)
  res.send({ msg: 'Flower added' })
})


app.post('/update', async (req, res) => {
  const id = req.body.id
  delete req.body.id;
  const data = req.body;
  await Flower.doc(id).update(data)
  res.send({ msg: 'Flower updated' })
})

app.delete('/delete', async (req, res) => {
  const id = req.body.id
  await Flower.doc(id).delete()
  res.send({ msg: 'Flower deleted' })
})

app.listen(PORT, () => console.log(`Server is up and running ${PORT}`))
