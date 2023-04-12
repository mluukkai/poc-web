const express = require('express')
const app = express()

app.use(express.json())

let datas = []

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/data', (req, res) => {
  res.json(datas)
})

app.post('/data', (request, response) => {
  const data = request.body
  datas.push(data)
  response.json(data)
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})