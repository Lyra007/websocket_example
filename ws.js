var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 8282})

wss.on('connection', function (ws) {
  ws.send(`${new Date()}`);
  ws.on('message', function (message) {
    console.log('received: %s', message);
  });

});
