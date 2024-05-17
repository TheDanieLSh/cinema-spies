const fs = require('fs')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/get_movies', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./movies.json', 'utf8')))
})

app.put('/add', (req, res) => {
    const movie = req.query.param1
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    json[movie] = true
    fs.writeFileSync('./movies.json', JSON.stringify(json))
})

app.put('/del', (req, res) => {
    const movie = req.query.param1
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    delete json[movie]
    fs.writeFileSync('./movies.json', JSON.stringify(json))
})

app.put('/change_st', (req, res) => {
    const movie = req.query.param1
    const status = req.query.param2
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    json[movie] = status
    fs.writeFileSync('./movies.json', JSON.stringify(json))
})

app.listen(4090, () => console.log('Server is running on port 4090'))
