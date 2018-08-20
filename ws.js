var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  ws.send('test kekekekke');
})
