const fs = require('fs')
const express = require('express')
const os = require('os')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express().use(cors())
    .use(bodyParser.text({ type: 'text/plain' }))
    .use(bodyParser.json())


app.get('/get_movies', (req, res) => {
    res.set('Content-Type', 'application/json')
    res.send(fs.readFileSync('./movies.json', 'utf8'))
    res.end()
})

app.put('/add', (req, res) => {
    const movie = req.body
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    json.movies[movie] = true
    json.total = Object.keys(json.movies).reduce((acc, cur) => {
        if (json.movies[cur] == true) acc++
        return acc
    }, 0)

    fs.writeFileSync('./movies.json', JSON.stringify(json, null, '\t'))

    console.log('Добавлен ' + req.body)
    res.end()
})

app.patch('/change_st', (req, res) => {
    const payload = req.body
    const json = {}

    json.movies = payload
    json.total = Object.keys(json.movies).reduce((acc, cur) => {
        if (json.movies[cur] == true) acc++
        return acc
    }, 0)

    fs.writeFileSync('./movies.json', JSON.stringify(json, null, '\t'))
    
    console.log('Статусы обновлены');
    res.end()
})

app.delete('/del', (req, res) => {
    const movie = req.body
    const json = JSON.parse(fs.readFileSync('./movies.json', 'utf8'))

    delete json.movies[movie]
    json.total = Object.keys(json.movies).reduce((acc, cur) => {
        if (json.movies[cur] == true) acc++
        return acc
    }, 0)

    fs.writeFileSync('./movies.json', JSON.stringify(json, null, '\t'))

    console.log('Лот удален')
    res.end()
})


const IP = Object.values(os.networkInterfaces()).flat()
    .find(iface => iface.family == 'IPv4' && !iface.internal)?.address;

PORT = 4090;

app.listen(PORT, IP, () => console.log(`Server is running at ${IP}:${PORT}`))
