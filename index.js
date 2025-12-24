require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 

// app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get(
  '/data', (req, res) => {
    res.json({
      "name": "John Doe",
      "age": 30,
      "city": "New York"
    })
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
