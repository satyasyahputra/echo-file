const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/read', (_req, res) => {
  try {
    const data = fs.readFileSync(process.env.FILE_PATH, 'utf8');
    res.send(data)
  } catch (err) {
    console.log(err)
    res.send(`error!: ${process.env.FILE_PATH}`)
  }
})

app.post('/write', (req, res) => {

  try {
    fs.writeFileSync(process.env.FILE_PATH, req.body.content);
    res.send('ok!')
  } catch (err) {
    console.log(err)
    res.send(`error!: ${process.env.FILE_PATH}`)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})