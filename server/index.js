const express = require("express"),
    http = require('http'),
    app = express(),
    WebSocket = require('ws')


const server = http.createServer(app)

const wss = new WebSocket.Server({server})

wss.on('connection', (ws) => {

    ws.isAlive = true

    ws.on('pong', () => ws.isAlive = true)

    ws.on('message', (message) => {

        console.log('received: %s', message)

        const broadcastRegex = /^broadcast\:/

        if (broadcastRegex.test(message)) {
            message = message.toString().replace(broadcastRegex, '')

            wss.clients.forEach(client => {
                if (client !== ws) client.send(`Hello, broadcast message -> ${message}`)
            })
        }

        ws.send(`Hello, you sent -> ${message}`)
    });

    ws.send('Hi there, I am a WebSocket server')
})

setInterval(() => {
    wss.clients.forEach((ws) => {

        if (!ws.isAlive) return ws.terminate()

        ws.isAlive = false
        ws.ping()
    })
}, 1000)

server.listen(+process.env.PORT || 4000, () => {
    console.log(`Server started on port ${server.address().port}.`)
})