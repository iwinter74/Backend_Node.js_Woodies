const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    if (req.url === '/') {
        fs.readFile('./public/index.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/about') {
        fs.readFile('./public/about.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/categories') {
        fs.readFile('./public/categories.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/how') {
        fs.readFile('./public/how.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/testimony') {
        fs.readFile('./public/testimony.html', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data)
        })
    }
    if (req.url === '/img/logo.jpg') {
        fs.readFile('./public/img/logo.jpg', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
            res.end(data)
        })
    }
    if (req.url === '/img/table.png') {
        fs.readFile('./public/img/table.png', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/jpeg' })
            res.end(data)
        })
    }
    if (req.url === '/img/rectangle.jpg') {
        fs.readFile('./public/img/rectangle.jpg', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'image/png' })
            res.end(data)
        })
    }
    if (req.url === '/style.css') {
        fs.readFile('./public/style.css', (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.end(data)
        })
    }
})

server.on('connection', () => {
    console.log('connected')

})

server.listen(3000, () => {
    console.log('server connected')
})

