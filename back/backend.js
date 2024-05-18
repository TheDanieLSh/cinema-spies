const fs = require('fs')
const express = require('express')
const os = require('os')

const app = express()

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


const IP = Object.values(os.networkInterfaces()).flat()
    .find(iface => iface.family == 'IPv4' && !iface.internal)?.address;

PORT = 4090;

app.listen(PORT, IP, () => console.log(`Server is running at ${IP}:${PORT}`))
