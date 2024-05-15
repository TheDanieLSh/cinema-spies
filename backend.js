const fs = require('fs')
const express = require('express')

const app = express()

app.get('/add', (req, res) => {
    const movie = req.query.param1
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    json[movie] = true
    fs.writeFileSync('./movies.json', JSON.stringify(json))
})

app.get('/del', (req, res) => {
    const movie = req.query.param1
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    delete json[movie]
    fs.writeFileSync('./movies.json', JSON.stringify(json))
})

app.get('/change_st', (req, res) => {
    const movie = req.query.param1
    const status = req.query.param2
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    json[movie] = status
    fs.writeFileSync('./movies.json', JSON.stringify(json))
})

app.listen(4090, () => console.log('Server is active on port 4090'))
