# Introduction
**WebSockets** - is the way to perform bidirectional duplex TCP communication which means both client and server permanently stay connected and are able to exchange string and binary data simultaneously. WS best fit for chat and gaming applications. WS is broadly supported by almost any type of electronic device connected to the web.

# About this repository
Along with following a short WS description, you can test WS by yourself.

1. Run host at the *server* folder by `node index` command.
2. Run *index.html* client application with *'live server'* in the IDE or similar tool. import/export directives don’t work via file:// protocol.
3. Try to send and receive messages, explore the code, try to close and reopen the connection, check, what is happening if the internet connection gets interrupted.
4. Open client application at another browser, use `broadcast: ` prefix. It will broadcast your message to all active WS clients except yours.

# How WS connection is happening
1. The client makes a request to the server by means of the so-called Handshake process.
2. Regular HTTP requests to the server happen with the following Headers:
    * GET ws://websocket.example.com
    * Connection: Upgrade
    * Upgrade: websocket
3. WS connection is established.

# Handling WS communication
From the front-end perspective WS is nothing more than a **JavaScript object** with Events on it:

1. Open (fires after establishing a connection).
2. Message (happens if the client receives some data from the server).
3. Close (fires if the connection is being closed, irrespectively intentionally or not).
4. Error (happens if the connection was interrupted due to some unexpected client or connection error).

`const socket = new WebSocket('wss://socketsbay.com/wss/v2/2/demo/')`

**WS actions**. Explicit user function calls:

1. send(message);
2. close(1000).

# Useful tips
**navigator** - built-in browser object which can tell you if the client is connected to the internet or not:

`navigator.online` - 1 or 0.

By processing the reconnection process please take into account that **Error code 1000** means that the connection was closed normally.